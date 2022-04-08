import axios from "axios";
import CompletedParks from "../models/CompletedParks";
import TrendingCardsModel from "../models/TrendingCardModel";

const url: string = process.env.REACT_APP_API_URL || "";

export const getAttendedParks = async (
  id: string
): Promise<TrendingCardsModel[]> => {
  return (await axios.get(`${url}/attendedParks`)).data;
};

export const addAttendedParks = async (
  park: TrendingCardsModel
): Promise<TrendingCardsModel> => {
  return (await axios.post(`${url}/attendedParks`, park)).data;
};
