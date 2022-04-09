import { useContext, useState } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import AuthContext from "../context/AuthContext";
import AccountParkCard from "./AccountParkCard";
import "./AccountRoute.css";

const Account = () => {
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
      <div>
        <h3>Your Score:</h3>
        <p>TODO POINTS</p>
      </div>
      <h1>How do you gain points?</h1>
    </div>
  );
};

export default Account;
