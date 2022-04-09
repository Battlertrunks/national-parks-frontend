import { useContext } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import Activities from "../models/Activities";
import CompletedParks from "../models/CompletedParks";
import TrendingCardsModel from "../models/TrendingCardModel";
import "./AccountActivitiesCard.css";

interface Props {
  onDisplayCard: Activities;
  park: CompletedParks;
}

const AccountActivitiesCard = ({ onDisplayCard, park }: Props) => {
  const { attendedActivity } = useContext(AttendedParksContext);

  const attendedActivityFunc = (): void => {
    onDisplayCard.completed = true;
    attendedActivity(park._id!, {
      uid: park.uid,
      id: park.id,
      _id: park.uid,
      images: park.images,
      fullName: park.fullName,
      description: park.description,
      parkCode: park.parkCode,
      activities: park.activities,
    });
  };

  return (
    <li className="AccountActivitiesCard">
      <p>{onDisplayCard.name}</p>
      <button onClick={() => attendedActivityFunc()}>Attended</button>
    </li>
  );
};

export default AccountActivitiesCard;
