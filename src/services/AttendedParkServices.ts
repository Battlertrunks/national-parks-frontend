import axios from "axios";
import CompletedParks from "../models/CompletedParks";
import TrendingCardsModel from "../models/TrendingCardModel";

const url: string = process.env.REACT_APP_API_URL || "";

export const getAttendedParks = async (
  uid: string
): Promise<TrendingCardsModel[]> => {
  return (await axios.get(url, { params: { uid: uid } })).data;
};

export const addAttendedParks = async (
  park: TrendingCardsModel
): Promise<TrendingCardsModel> => {
  return (await axios.post(url, park)).data;
};

export const deleteAttendedParks = async (id: string): Promise<void> => {
  return (await axios.delete(`${url}/${encodeURIComponent(id)}`)).data;
};

export const completedActivity = async (
  id: string,
  park: CompletedParks
): Promise<CompletedParks> => {
  return await axios.put(`${url}/${encodeURIComponent(id)}`, park);
};
