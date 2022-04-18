import { createContext } from "react";
import CompletedParks from "../models/CompletedParks";
import NationalParksCard from "../models/NationalParksCard";

// Setting the model of what we are going to need and use.
interface AttendParksContextModel {
  attendedParks: NationalParksCard[];
  viewingUser: (userUid: string) => void;
  getAndSetParks: (user: any) => void;
  addPark: (park: NationalParksCard) => void;
  removePark: (id: string) => void;
  attendedActivity: (id: string, park: CompletedParks) => void;
}

// Defining the default value to be needed for the provider.
const defaultValues: AttendParksContextModel = {
  attendedParks: [],
  viewingUser: () => {},
  getAndSetParks: () => {},
  addPark: () => {},
  removePark: () => {},
  attendedActivity: () => {},
};

const AttendedParksContext = createContext(defaultValues);
export default AttendedParksContext;
