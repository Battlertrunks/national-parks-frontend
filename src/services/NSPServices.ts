import axios from "axios";
import ActivitiesResponse from "../models/ActivitiesResponse";
import NewsCardModelResponse from "../models/NewsCardModelResponse";
import Params from "../models/Params";
import ParkDetailsCardModelResponse from "../models/ParkDetailsCardModelResponse";
import NationalParksCardResponse from "../models/NationalParksCardResponse";

// The key to access the NPS API to get the parks and more
const key: string = process.env.REACT_APP_NPS_KEY || "";

// Gets default list of parks for users to see or go to.
export const getThingsToDo = async (): Promise<NationalParksCardResponse> => {
  return (
    await axios.get("https://developer.nps.gov/api/v1/parks", {
      params: { api_key: key },
    })
  ).data;
};

// Retrives the activities
export const getActivities = async (): Promise<ActivitiesResponse> => {
  return (
    await axios.get("https://developer.nps.gov/api/v1/activities", {
      params: { api_key: key },
    })
  ).data;
};

// Retrives the parks from the user's search params
export const getParksBySearch = async (
  newParams: Params
): Promise<NationalParksCardResponse> => {
  newParams.api_key = key;
  return await axios
    .get("https://developer.nps.gov/api/v1/parks", {
      params: newParams,
    })
    .then((response) => response.data);
};

// Retrives a details information of a park
export const getParkDetails = async (
  parkCode: string
): Promise<ParkDetailsCardModelResponse> => {
  return (
    await axios.get(`https://developer.nps.gov/api/v1/parks`, {
      params: { api_key: key, parkCode: parkCode },
    })
  ).data;
};

// Retrives a number of news articles
export const getNews = async (): Promise<NewsCardModelResponse> => {
  return (
    await axios.get(`https://developer.nps.gov/api/v1/newsreleases?limit=5`, {
      params: { api_key: key },
    })
  ).data;
};
