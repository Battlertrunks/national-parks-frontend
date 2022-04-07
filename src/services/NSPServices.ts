import axios from "axios";
import TrendingCardModelResponse from "../models/TrendingCardModelResponse";

const key: string = process.env.REACT_APP_NPS_KEY || "";

export const getThingsToDo = async (): Promise<TrendingCardModelResponse> => {
  return (
    await axios.get("https://developer.nps.gov/api/v1/parks?", {
      params: { api_key: key },
    })
  ).data;
};
