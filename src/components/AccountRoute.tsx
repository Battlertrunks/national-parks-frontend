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

  const [attendingParkDropdown, setAttendingParkDropdown] =
    useState<boolean>(false);
  const [completingActivityDropdown, setCompletingActivityDropdown] =
    useState<boolean>(false);
  const [removeParkDropdown, setRemoveParkDropdown] = useState<boolean>(false);

  return (
    <div className="Account">
      <h2>Hello, {user?.displayName}!</h2>
      <ul>
        {attendedParks.length !== 0 ? (
          attendedParks.map(
            (park) =>
              park.uid === user?.uid && (
                <AccountParkCard park={park} key={park._id} />
              )
          )
        ) : (
          <p>Your park list is empty</p>
        )}
      </ul>
      <h2>Acount Parks FAQ</h2>
      <ul>
        <li>
          <div>
            <h3>Attending Parks</h3>
            <button onClick={() => setAttendingParkDropdown((prev) => !prev)}>
              Dropdown
            </button>
          </div>
          {attendingParkDropdown && (
            <p>
              You can add parks to your visited list on your account by clicking
              the attended button. Your visited parks will be saved onto your
              account when ever you log back into your account.
            </p>
          )}
        </li>
        <li>
          <div>
            <h3>Completing Park Activities</h3>
            <button
              onClick={() => setCompletingActivityDropdown((prev) => !prev)}
            >
              Dropdown
            </button>
          </div>
          {completingActivityDropdown && (
            <p>
              When completing an activity, your progress will increase until you
              have reached 100% park completion. You can unset activities that
              you have not completed.
            </p>
          )}
        </li>
        <li>
          <div>
            <h3>Removing Park</h3>
            <button onClick={() => setRemoveParkDropdown((prev) => !prev)}>
              Dropdown
            </button>
          </div>
          {removeParkDropdown && (
            <p>
              If you delete a visited park from you saved list, all the progress
              will be deleted as well. Please be aware when deleting parks you
              delete.
            </p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Account;
