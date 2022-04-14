import { useContext } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import Activities from "../models/Activities";
import CompletedParks from "../models/CompletedParks";
import "./AccountActivitiesCard.css";

// Pulling the specific activity to be displayed and adding park for when the user states they
// have done the activity to update the activity completed to true.
interface Props {
  onDisplayCard: Activities;
  park: CompletedParks;
}

const AccountActivitiesCard = ({ onDisplayCard, park }: Props) => {
  // Getting the attendedActivity function from AttendedParksContext context to update the completion of the activity.
  const { attendedActivity } = useContext(AttendedParksContext);

  // When the user clicks the attended button, it updates the activity object's property completed to true.
  const attendedActivityFunc = (): void => {
    // Changing completed from false to true.
    onDisplayCard.completed = !onDisplayCard.completed;
    // Calling the attendedActivity to update the completetion to updated by sending
    // the id of what park we want to updated and sending the new/updated park object
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

  const checksCompletion: string = onDisplayCard.completed
    ? "Completed"
    : "NotCompleted";

  return (
    <li className="AccountActivitiesCard">
      <p>{onDisplayCard.name}</p>
      <button
        className={checksCompletion}
        onClick={() => attendedActivityFunc()}
      >
        {onDisplayCard.completed ? "Completed" : "Finished?"}
      </button>
    </li>
  );
};

export default AccountActivitiesCard;
