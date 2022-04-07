import axios from "axios";
import CompletedParks from "../models/CompletedParks";

const url: string = process.env.REACT_APP_API_URL || "";

export const getAttendedParks = async (): Promise<CompletedParks[]> => {
  return (await axios.get(`${url}/attendedParks`)).data;
};
