import "./NewsCard.css";
import NewsCardModel from "../../models/NewsCardModel";

interface Props {
  newsDisplay: NewsCardModel;
  onSlide: number;
}

const NewsCard = ({ newsDisplay, onSlide }: Props) => {
  const hasImage = newsDisplay.image.url ? "block" : "none";

  return (
    <li
      className="NewsCard"
      style={{ transform: `translateX(${onSlide * -100}%)` }}
    >
      <div className="img-container">
        <a href={newsDisplay.url} target="_blank">
          <img
            src={newsDisplay.image.url}
            alt={newsDisplay.image.altText}
            style={{ display: `${hasImage}` }}
          />
        </a>
      </div>
      <div className="content-container">
        <h2>{newsDisplay.title}</h2>
        <p>{newsDisplay.abstract}</p>
      </div>
    </li>
  );
};

export default NewsCard;
