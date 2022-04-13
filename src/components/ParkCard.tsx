import { useContext } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./ParkCard.css";
import CompletedParks from "../models/CompletedParks";
import Activities from "../models/Activities";

interface Props {
  onDisplay: CompletedParks;
}

const ParkCard = ({ onDisplay }: Props) => {
  const { user } = useContext(AuthContext);
  const { attendedParks, addPark } = useContext(AttendedParksContext);

  const parkCode: any = {
    ...(onDisplay.parkCode ? { parkCode: onDisplay.parkCode } : {}),
  };
  //   console.log(attendedParks.filter((item) => item.uid === onDisplay.uid));

  const addingParkToProgress = (): void => {
    if (user) {
      const result: Activities[] = onDisplay.activities.map((act) => {
        return { id: act.id, name: act.name, completed: false };
      });
      const parkToAdd: CompletedParks = {
        id: onDisplay.id,
        uid: onDisplay.uid,
        images: onDisplay.images,
        fullName: onDisplay.fullName,
        description: onDisplay.description,
        parkCode: onDisplay.parkCode,
        activities: result,
      };
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

      {user && !attendedParks.some((park) => park?.id === onDisplay?.id) && (
        <button onClick={() => addingParkToProgress()}>Mark Attended</button>
      )}
    </div>
  );
};

export default ParkCard;
