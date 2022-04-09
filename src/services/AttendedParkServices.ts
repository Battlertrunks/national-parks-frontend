import axios from "axios";
import CompletedParks from "../models/CompletedParks";
import TrendingCardsModel from "../models/TrendingCardModel";

const url: string = process.env.REACT_APP_API_URL || "";

export const getAttendedParks = async (
  id: string
): Promise<TrendingCardsModel[]> => {
  return (await axios.get(url, { params: { uid: id } })).data;
};

export const addAttendedParks = async (
  park: TrendingCardsModel
): Promise<TrendingCardsModel> => {
  return (await axios.post(url, park)).data;
};

export const deleteAttendedParks = async (id: string): Promise<void> => {
  return (await axios.delete(`${url}/${encodeURIComponent(id)}`)).data;
};
