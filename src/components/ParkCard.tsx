import TrendingCardsModel from "../models/TrendingCardModel";
import "./ParkCard.css";

interface Props {
  onDisplay: TrendingCardsModel;
}

const ParkCard = ({ onDisplay }: Props) => {
  return (
    <div className="ParkCard">
      <img src={onDisplay.images[0].url} alt={onDisplay.images[0].altText} />
      <h2>{onDisplay.fullName}</h2>
      <p>{onDisplay.description}</p>
    </div>
  );
};

export default ParkCard;
