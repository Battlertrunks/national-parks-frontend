import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AttendedParksContext from "../context/AttendedParksContext";
import CompletedParks from "../models/CompletedParks";
import AccountActivitiesCard from "./AccountActivitiesCard";
import "./AccountParkCard.css";

// Getting the park data to put on the account by using props.
interface Props {
  park: CompletedParks;
}

const AccountParkCard = ({ park }: Props) => {
  // Setting up state for the user to expand and unexpand the activities.
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(true);
  // Getting the removePark function from our context.
  const { removePark } = useContext(AttendedParksContext);

  // Controls whether the activities should be displayed or not from the dropdownToggle.
  const setDropdown = dropdownToggle ? "activity-dropdown" : "";

  // This will take you to the detailed park info of the park that has been clicked.
  const parkCodeLink: any = {
    ...(park.parkCode ? { parkCode: park.parkCode } : {}),
  };

  // Calcualtes the progress bar of completed activities by calculating the length (amount) of activities
  // and dividing it by the amount completed, then multiplying by 100 to make it a whole number.
  const progressBar =
    (park.activities.reduce(
      (prev, act) => (act.completed ? prev + 1 : prev),
      0
    ) /
      park.activities.length) *
    100;
  return (
    <li className="AccountParkCard" key={park._id}>
      <Link to={`/parks/details?${new URLSearchParams(parkCodeLink)}`}>
        <p>{park.fullName}</p>
      </Link>
      <div className="container">
        <div className="filler" style={{ width: `${progressBar}%` }}>
          <span className="label">{`${progressBar.toFixed(0)}%`}</span>
        </div>
      </div>
      <button onClick={() => setDropdownToggle((prev) => !prev)}>
        Dropdown
      </button>
      <ul className={setDropdown}>
        {park.activities.map((activity) => (
          <AccountActivitiesCard
            onDisplayCard={activity}
            park={park}
            key={activity.id}
          />
        ))}
      </ul>
      <button onClick={() => removePark(park._id!)}>Remove Park</button>
    </li>
  );
};

export default AccountParkCard;
