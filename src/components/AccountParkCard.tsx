import { useContext, useState } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import TrendingCardsModel from "../models/TrendingCardModel";
import AccountActivitiesCard from "./AccountActivitiesCard";
import "./AccountParkCard.css";

interface Props {
  park: TrendingCardsModel;
}

const AccountParkCard = ({ park }: Props) => {
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(true);
  const { removePark } = useContext(AttendedParksContext);

  const setDropdown = dropdownToggle ? "activity-dropdown" : "";

  return (
    <li key={park._id}>
      <p>{park.fullName}</p>
      <button onClick={() => setDropdownToggle((prev) => !prev)}>
        Dropdown
      </button>
      <ul className={setDropdown}>
        {park.activities.map((activity) => (
          <AccountActivitiesCard onDisplayCard={activity} key={activity.id} />
        ))}
      </ul>
      <button onClick={() => removePark(park._id!)}>Remove Park</button>
    </li>
  );
};

export default AccountParkCard;
