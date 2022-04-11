import "./NewsCard.css";
import NewsCardModel from "../../models/NewsCardModel";

interface Props {
  newsDisplay: NewsCardModel;
}

const NewsCard = ({ newsDisplay }: Props) => {
  const hasImage = newsDisplay.image.url ? "block" : "none";

  return (
    <div className="img-container">
      <a href={newsDisplay.url} target="_blank">
        <h2>{newsDisplay.title}</h2>
        <img
          src={newsDisplay.image.url}
          alt={newsDisplay.image.altText}
          style={{ display: `${hasImage}` }}
        />
      </a>
      <p>{newsDisplay.abstract}</p>
    </div>
  );
};

export default NewsCard;
