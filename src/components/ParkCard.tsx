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
  const { addPark } = useContext(AttendedParksContext);

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
      console.log("Press");
    }
  };

  return (
    <div className="ParkCard">
      <img src={onDisplay.images[0].url} alt={onDisplay.images[0].altText} />
      <Link to={`/parks/details?${new URLSearchParams(parkCode)}`}>
        <h2>{onDisplay.fullName}</h2>
      </Link>

      <p>{onDisplay.description}</p>
      {user && <button onClick={() => addingParkToProgress()}>Attended</button>}
    </div>
  );
};

export default ParkCard;
