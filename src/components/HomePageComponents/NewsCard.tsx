import "./NewsCard.css";
import NewsCardModel from "../../models/NewsCardModel";
import backupImg from "../../images/NPS-Transparent-Logo.png";

interface Props {
  newsDisplay: NewsCardModel;
  onSlide: number;
}

const NewsCard = ({ newsDisplay, onSlide }: Props) => {
  const hasImage = newsDisplay.image.url ? newsDisplay.image.url : backupImg;

  return (
    <li
      className="NewsCard"
      style={{ transform: `translateX(${onSlide * -100}%)` }}
    >
      <div className="img-container">
        <a href={newsDisplay.url} target="_blank">
          <img src={hasImage} alt={newsDisplay.image.altText} />
        </a>
      </div>

      <div className="content-container">
        <a href={newsDisplay.url} target="_blank">
          <h2>{newsDisplay.title}</h2>
          <p>{newsDisplay.abstract}</p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
