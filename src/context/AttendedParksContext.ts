import { createContext } from "react";
import CompletedParks from "../models/CompletedParks";
import TrendingCardsModel from "../models/TrendingCardModel";

interface AttendParksContextModel {
  attendedParks: TrendingCardsModel[];
  addPark: (park: TrendingCardsModel) => void;
  //   removePark: (id: string) => void;
}

const defaultValues: AttendParksContextModel = {
  attendedParks: [],
  addPark: () => {},
  //   removePark: () => {},
};

const AttendedParksContext = createContext(defaultValues);
export default AttendedParksContext;
