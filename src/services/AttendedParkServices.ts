import axios from "axios";
import CompletedParks from "../models/CompletedParks";
import TrendingCardsModel from "../models/TrendingCardModel";

// Our API URL to be able to access our backend
const url: string = process.env.REACT_APP_API_URL || "";

// Gets the parks the user has attended. returns a promise of the data
export const getAttendedParks = async (
  uid: string
): Promise<TrendingCardsModel[]> => {
  return (await axios.get(url, { params: { uid: uid } })).data;
};

// adds a attended park and returns the data from a promise
export const addAttendedParks = async (
  park: TrendingCardsModel
): Promise<TrendingCardsModel> => {
  return (await axios.post(url, park)).data;
};

// deletes an attended park and returns nothing (void)
export const deleteAttendedParks = async (id: string): Promise<void> => {
  return (await axios.delete(`${url}/${encodeURIComponent(id)}`)).data;
};

// sets and activity as completed or not within a park
// CHECK THIS FUNCTION LATER
export const completedActivity = async (
  id: string,
  park: CompletedParks
): Promise<CompletedParks> => {
  return await axios.put(`${url}/${encodeURIComponent(id)}`, park);
};
