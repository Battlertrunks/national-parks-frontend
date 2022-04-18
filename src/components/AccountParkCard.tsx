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
  // Setting up state for the user to expand and collapse the activities.
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(true);
  // Getting the removePark function from our context.
  const { removePark } = useContext(AttendedParksContext);

  // Controls whether the activities should be displayed or not from the dropdownToggle.
  const setDropdown = dropdownToggle ? "activity-dropdown" : "";

  // Limits the amount of comments per park to 5 at default
  const [showMoreActs, setShowMoreActs] = useState<number>(9);

  // This will take you to the detailed park info of the park that has been clicked.
  const parkCodeLink: any = {
    ...(park.parkCode ? { parkCode: park.parkCode } : {}),
  };

  const rotateDropDownIcon = dropdownToggle ? "0deg" : "180deg";

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
      <div className="name-and-remove-container">
        <Link to={`/parks/details?${new URLSearchParams(parkCodeLink)}`}>
          <h4>{park.fullName}</h4>
        </Link>
        <button className="remove-btn" onClick={() => removePark(park._id!)}>
          Remove Park
        </button>
      </div>
      <div className="container">
        <div className="filler" style={{ width: `${progressBar}%` }}>
          <span className="label">{`${progressBar.toFixed(0)}%`}</span>
        </div>
      </div>
      <button
        className="dropdown-btn"
        style={{ transform: `rotate(${rotateDropDownIcon})` }}
        onClick={() => setDropdownToggle((prev) => !prev)}
      >
        <i className="fa-regular fa-circle-down"></i>
      </button>
      <div className={setDropdown}>
        <ul>
          {[
            ...Array(
              park.activities.length > showMoreActs
                ? showMoreActs
                : park.activities.length
            ),
          ]?.map((activity, index) => (
            <AccountActivitiesCard
              onDisplayCard={park.activities[index]}
              park={park}
              key={park.activities[index].id}
            />
          ))}
        </ul>
        <button
          className="more-acts"
          onClick={() =>
            setShowMoreActs((prev) =>
              prev < park.activities.length ? prev + 9 : prev
            )
          }
        >
          Show More Activities
        </button>
      </div>
    </li>
  );
};

export default AccountParkCard;
