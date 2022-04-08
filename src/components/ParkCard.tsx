import { useContext } from "react";
import AttendedParksContext from "../context/AttendedParksContext";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import TrendingCardsModel from "../models/TrendingCardModel";
import "./ParkCard.css";

interface Props {
  onDisplay: TrendingCardsModel;
}

const ParkCard = ({ onDisplay }: Props) => {

  const { user } = useContext(AuthContext);
  const { attendedParks, addPark } = useContext(AttendedParksContext);
        
  const parkCode: any = {
    ...(onDisplay.parkCode ? { parkCode: onDisplay.parkCode } : {}),
  };


  return (
    <div className="ParkCard">
      <img src={onDisplay.images[0].url} alt={onDisplay.images[0].altText} />
      <Link to={`/parks/details?${new URLSearchParams(parkCode)}`}>
        <h2>{onDisplay.fullName}</h2>
      </Link>

      <p>{onDisplay.description}</p>
      {user && (
        <button
          onClick={() => {
            addPark({ ...onDisplay, uid: user.uid });
          }}
        >
          Attended
        </button>
      )}
    </div>
  );
};

export default ParkCard;
