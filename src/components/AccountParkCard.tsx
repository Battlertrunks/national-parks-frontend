import { useContext, useState } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import CompletedParks from "../models/CompletedParks";
import TrendingCardsModel from "../models/TrendingCardModel";
import AccountActivitiesCard from "./AccountActivitiesCard";
import "./AccountParkCard.css";

interface Props {
  park: CompletedParks;
}

const AccountParkCard = ({ park }: Props) => {
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(true);
  const { removePark } = useContext(AttendedParksContext);

  const setDropdown = dropdownToggle ? "activity-dropdown" : "";

  const progressBar =
    (park.activities.reduce(
      (prev, act) => (act.completed ? prev + 1 : prev),
      0
    ) /
      park.activities.length) *
    100;

  return (
    <li className="AccountParkCard" key={park._id}>
      <p>{park.fullName}</p>
      <div className="container">
        <div className="filler" style={{ width: `${progressBar}%` }}>
          <span className="label">{`${progressBar.toFixed(2)}%`}</span>
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
