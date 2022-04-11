import axios from "axios";
import ActivitiesResponse from "../models/ActivitiesResponse";
import NewsCardModelResponse from "../models/NewsCardModelResponse";
import Params from "../models/Params";
import ParkDetailsCardModelResponse from "../models/ParkDetailsCardModelResponse";
import TrendingCardModelResponse from "../models/TrendingCardModelResponse";

const key: string = process.env.REACT_APP_NPS_KEY || "";

export const getThingsToDo = async (): Promise<TrendingCardModelResponse> => {
  return (
    await axios.get("https://developer.nps.gov/api/v1/parks", {
      params: { api_key: key },
    })
  ).data;
};

export const getActivities = async (): Promise<ActivitiesResponse> => {
  return (
    await axios.get("https://developer.nps.gov/api/v1/activities", {
      params: { api_key: key },
    })
  ).data;
};

export const getParksBySearch = async (
  newParams: Params
): Promise<TrendingCardModelResponse> => {
  newParams.api_key = key;
  return await axios
    .get("https://developer.nps.gov/api/v1/parks", {
      params: newParams,
    })
    .then((response) => response.data);
};

export const getParkDetails = async (
  parkCode: string
): Promise<ParkDetailsCardModelResponse> => {
  return (
    await axios.get(`https://developer.nps.gov/api/v1/parks`, {
      params: { api_key: key, parkCode: parkCode },
    })
  ).data;
};

export const getNews = async (): Promise<NewsCardModelResponse> => {
  return (
    await axios.get(`https://developer.nps.gov/api/v1/newsreleases?limit=5`, {
      params: { api_key: key },
    })
  ).data;
};
