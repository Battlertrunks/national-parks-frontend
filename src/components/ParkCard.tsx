import { useContext } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./ParkCard.css";
import CompletedParks from "../models/CompletedParks";
import Activities from "../models/Activities";

// retriving park information to display to the screen
interface Props {
  onDisplay: CompletedParks;
}

const ParkCard = ({ onDisplay }: Props) => {
  // Getting user info for user to have options to say they attended
  // parks and more.
  const { user } = useContext(AuthContext);
  // Context, uses attendedParks to check if users has attended parks already and
  // addPark to add parks to their attended list.
  const { attendedParks, addPark } = useContext(AttendedParksContext);

  // Gets parkCode to use to load into park details screen in params
  const parkCode: any = {
    ...(onDisplay.parkCode ? { parkCode: onDisplay.parkCode } : {}),
  };

  // This function adds park to users attended list
  const addingParkToProgress = (): void => {
    // checks if user is logged in
    if (user) {
      // Storing activities the park offers.
      const result: Activities[] = onDisplay.activities.map((act) => {
        return { id: act.id, name: act.name, completed: false };
      });
      // Adding park to their attended list by storing it in a variable first
      const parkToAdd: CompletedParks = {
        id: onDisplay.id,
        uid: onDisplay.uid,
        username: user.displayName!,
        images: onDisplay.images,
        fullName: onDisplay.fullName,
        description: onDisplay.description,
        parkCode: onDisplay.parkCode,
        activities: result,
      };
      // Sending the parks and assigning it the user using their uid.
      addPark({ ...parkToAdd, uid: user.uid });
    }
  };

  return (
    <div className="ParkCard">
      <div className="parkcard-pic-and-text">
        <div className="parkcard-pic">
          <img
            src={onDisplay.images[0].url}
            alt={onDisplay.images[0].altText}
          />
        </div>
        <div className="parkcard-text">
          <Link to={`/parks/details?${new URLSearchParams(parkCode)}`}>
            <h2>{onDisplay.fullName}</h2>
          </Link>
          <p>{onDisplay.description}</p>
        </div>
      </div>
      {user && !attendedParks.some((park) => park?.id === onDisplay?.id) ? (
        <button onClick={() => addingParkToProgress()}>Mark Visited</button>
      ) : (
        <button disabled>Visited</button>
      )}
    </div>
  );
};

export default ParkCard;
