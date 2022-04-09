import { createContext } from "react";
import CompletedParks from "../models/CompletedParks";
import TrendingCardsModel from "../models/TrendingCardModel";

// Setting the model of what we are going to need and use.
interface AttendParksContextModel {
  attendedParks: TrendingCardsModel[];
  addPark: (park: TrendingCardsModel) => void;
  removePark: (id: string) => void;
  attendedActivity: (id: string, park: CompletedParks) => void;
}

// Defining the default value to be needed for the provider.
const defaultValues: AttendParksContextModel = {
  attendedParks: [],
  addPark: () => {},
  removePark: () => {},
  attendedActivity: () => {},
};

const AttendedParksContext = createContext(defaultValues);
export default AttendedParksContext;
