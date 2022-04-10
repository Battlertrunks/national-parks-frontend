import { useEffect, useState } from "react";
import "./NewsCard.css";
import NewsCardModel from "../../models/NewsCardModel";
import { getNews } from "../../services/NSPServices";

interface Props {
  newsDisplay: NewsCardModel;
}

const NewsCard = ({ newsDisplay }: Props) => {
  // const [news, setNews] = useState<NewsCardModel[]>();

  // useEffect(() => {
  //   getNews().then((response) => setNews(response.data));
  // }, []);

  return (
    <div className="img-container">
      <h1>NEWS</h1>
      <img src={newsDisplay.url[0]} alt={newsDisplay.image.altText} />
    </div>
  );
};

export default NewsCard;
