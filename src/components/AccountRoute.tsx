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

  // These three states are for the FAQ toggle in account page.
  const [attendingParkDropdown, setAttendingParkDropdown] =
    useState<boolean>(false);
  const [completingActivityDropdown, setCompletingActivityDropdown] =
    useState<boolean>(false);
  const [removeParkDropdown, setRemoveParkDropdown] = useState<boolean>(false);

  return (
    <section className="Account">
      <div className="park-container">
        <h2>Hello, {user?.displayName}!</h2>
        <ul className="park-container">
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
      </div>
      <h2 className="title-FAQ">Account Parks FAQ</h2>
      <ul>
        <li>
          <div className="answers attending">
            <h3 className="faq attending">Attending Parks</h3>
            <button onClick={() => setAttendingParkDropdown((prev) => !prev)}>
              Dropdown
            </button>
            {attendingParkDropdown && (
              <p>
                You can add parks to your visited list on your account by
                clicking the attended button. Any parks added to the list will
                be available the next time you log back in.
              </p>
            )}
          </div>
        </li>
        <li>
          <div className="answers completing">
            <h3 className="faq completing">Completing Park Activities</h3>
            <button
              onClick={() => setCompletingActivityDropdown((prev) => !prev)}
            >
              Dropdown
            </button>
            {completingActivityDropdown && (
              <p>
                When completing a park activity, your progress will increase
                until you have reached 100% park completion. This indicates that
                you have done all available activities that park has to offer.
                You can unset activities that you have not finished or may have
                selected accidentally.
              </p>
            )}
          </div>
        </li>
        <li>
          <div className="answers removing">
            <h3 className="faq removing">Removing Park</h3>
            <button onClick={() => setRemoveParkDropdown((prev) => !prev)}>
              Dropdown
            </button>
            {removeParkDropdown && (
              <p>
                If you remove a visited park from your saved list, all of your
                progress will be deleted. Please be aware of which park you are
                removing.
              </p>
            )}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Account;
