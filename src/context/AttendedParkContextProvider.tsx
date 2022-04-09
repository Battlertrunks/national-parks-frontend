import { ReactNode, useContext, useEffect, useState } from "react";
import CompletedParks from "../models/CompletedParks";
import {
  addAttendedParks,
  deleteAttendedParks,
  getAttendedParks,
} from "../services/AttendedParkServices";
import AuthContext from "./AuthContext";
import AttendedParksContext from "./AttendedParksContext";
import TrendingCardsModel from "../models/TrendingCardModel";

interface Props {
  children: ReactNode;
}

const AttendedParksContextProvider = ({ children }: Props) => {
  const { user } = useContext(AuthContext);

  const [attendedParks, setAttendedParks] = useState<TrendingCardsModel[]>([]);

  const getAndSetParks = (user: any): void => {
    getAttendedParks(user.uid).then((response) => setAttendedParks(response));
  };

  const addPark = (park: TrendingCardsModel): void => {
    addAttendedParks(park).then(() => getAndSetParks(user));
  };

  const removePark = (id: string): void => {
    deleteAttendedParks(id).then(() => getAndSetParks(attendedParks));
  };

  useEffect(() => {
    if (user) {
      getAndSetParks(user);
    }
  }, [user]);
  return (
    <AttendedParksContext.Provider
      value={{ attendedParks, addPark, removePark }}
    >
      {children}
    </AttendedParksContext.Provider>
  );
};

export default AttendedParksContextProvider;
