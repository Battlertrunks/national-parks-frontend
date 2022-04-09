import { useContext } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import AuthContext from "../context/AuthContext";
import "./AccountRoute.css";

const Account = () => {
  const { user } = useContext(AuthContext);
  const { attendedParks, removePark } = useContext(AttendedParksContext);

  return (
    <div className="Account">
      <h2>Hello, {user?.displayName}!</h2>
      <ul>
        {attendedParks.map(
          (park) =>
            park.uid === user?.uid && (
              <li key={park._id}>
                <p>{park.fullName}</p>
                <button onClick={() => removePark(park._id!)}>
                  Remove Park
                </button>
              </li>
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
