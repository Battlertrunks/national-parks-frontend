import { ReactNode, useContext, useEffect, useState } from "react";
import CompletedParks from "../models/CompletedParks";
import {
  addAttendedParks,
  completedActivity,
  deleteAttendedParks,
  getAttendedParks,
} from "../services/AttendedParkServices";
import AuthContext from "./AuthContext";
import AttendedParksContext from "./AttendedParksContext";
import NationalParksCard from "../models/NationalParksCard";

interface Props {
  children: ReactNode;
}

const AttendedParksContextProvider = ({ children }: Props) => {
  // Getting user to use the uid to pick out the "user's" parks they went to.
  const { user } = useContext(AuthContext);

  // The state that stores the attended parks once retrived from MongoDB.
  const [attendedParks, setAttendedParks] = useState<NationalParksCard[]>([]);
  const [viewUserId, setViewUserId] = useState<string>("");

  const viewingUser = (userUid: string) => {
    setViewUserId(userUid);
  };

  // Gets the parks for the specific user. TODO NEED TO FIX AN UID ISSUE
  const getAndSetParks = (user: any): void => {
    getAttendedParks(user).then((response) => setAttendedParks(response));
  };

  // Adds a park when the user clicks the button that they have visited there.
  const addPark = (park: NationalParksCard): void => {
    addAttendedParks(park).then(() => getAndSetParks(user?.uid));
  };

  // Removes a park if the user may have not been there or they wish not to say they have been there for some reason.
  const removePark = (id: string): void => {
    deleteAttendedParks(id).then(() => getAndSetParks(user?.uid));
  };

  // Updates the park's activity(ies) when the user completes them.
  const attendedActivity = (id: string, park: CompletedParks): void => {
    completedActivity(id, park).then(() => getAndSetParks(user?.uid));
  };

  // Runs once and when the user changes to get the attendedParks for the logged in user.
  useEffect(() => {
    // Checks if user is logged in.
    if (user || viewUserId) {
      const userid: string | undefined = viewUserId ? viewUserId : user?.uid;
      getAndSetParks(userid);
    }
  }, [user, viewUserId]);

  return (
    <AttendedParksContext.Provider
      value={{
        attendedParks,
        viewingUser,
        getAndSetParks,
        addPark,
        removePark,
        attendedActivity,
      }}
    >
      {children}
    </AttendedParksContext.Provider>
  );
};

export default AttendedParksContextProvider;
