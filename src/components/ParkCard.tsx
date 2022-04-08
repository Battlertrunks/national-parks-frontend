import { Link } from "react-router-dom";
import TrendingCardsModel from "../models/TrendingCardModel";
import "./ParkCard.css";

interface Props {
  onDisplay: TrendingCardsModel;
}

const ParkCard = ({ onDisplay }: Props) => {
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
    </div>
  );
};

export default ParkCard;
