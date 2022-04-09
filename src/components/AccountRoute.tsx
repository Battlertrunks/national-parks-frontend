import { useContext, useState } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import AuthContext from "../context/AuthContext";
import AccountParkCard from "./AccountParkCard";
import "./AccountRoute.css";

const Account = () => {
  // Gathering user (to see if the user is logged in or not) and attendedPark (to display the user's
  // parks they have visited).
  const { user } = useContext(AuthContext);
  const { attendedParks } = useContext(AttendedParksContext);

  return (
    <div className="Account">
      <h2>Hello, {user?.displayName}!</h2>
      <ul>
        {attendedParks.map(
          (park) =>
            park.uid === user?.uid && (
              <AccountParkCard park={park} key={park._id} />
            )
        )}
      </ul>
    </div>
  );
};

export default Account;
