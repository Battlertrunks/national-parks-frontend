import TrendingCardsModel from "../../models/TrendingCardModel";
import "./TrendingCard.css";

interface Props {
  displayContent: TrendingCardsModel;
  onSlide: number;
}

const TrendingCard = ({ displayContent, onSlide }: Props) => {
  return (
    <li
      className="TrendingCard"
      style={{ transform: `translateX(${onSlide * -100}%)` }}
    >
      <div className="img-container">
        <img
          src={displayContent.images[0].url}
          alt={displayContent.images[0].altText}
        />
      </div>
      <div className="content-container">
        <h3>{displayContent.fullName}</h3>
        <p>{displayContent.description}</p>
      </div>
    </li>
  );
};

export default TrendingCard;
