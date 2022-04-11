import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import NewsCardModel from "../models/NewsCardModel";
import TrendingCardsModel from "../models/TrendingCardModel";
import { getThingsToDo, getNews } from "../services/NSPServices";
import HomeSearchParkForm from "./HomePageComponents/HomeSearchParkForm";
import NewsCard from "./HomePageComponents/NewsCard";
import "./HomeRoute.css";
import OpeningSection from "./OpeningSection";

const HomeRoute = () => {
  const [trending, setTrending] = useState<TrendingCardsModel[]>([]);
  const [news, setNews] = useState<NewsCardModel[]>([]);
  const [count, setCount] = useState<number>(0);

  const { user } = useContext(AuthContext);

  const retrieveThingsToDo = (): void => {
    getThingsToDo().then((response) => setTrending(response.data));
  };
  const retrieveNews = (): void => {
    getNews().then((response) => setNews(response.data));
  };

  useEffect(() => {
    retrieveThingsToDo();
    retrieveNews();
  }, []);

  const swipeNewsLeft = (): void => {
    if (count <= 0) {
      setCount(news.length - 1);
      return;
    }
    setCount((prev) => prev - 1);
  };

  const swipeNewsRight = (): void => {
    if (count >= news.length - 1) {
      setCount(0);
      return;
    }
    setCount((prev) => prev + 1);
  };
  return (
    <section className="HomeRoute">
      <OpeningSection />
      <h2>National Park News</h2>
      <div className="news-slides-container">
        <button onClick={() => swipeNewsLeft()} className="left-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="news-slides">
          {news.map((item) => (
            <NewsCard newsDisplay={item} onSlide={count} key={item.id} />
          ))}
          <button onClick={() => swipeNewsRight()} className="right-btn">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </ul>
      </div>
      <h2>Search National Parks</h2>
      <HomeSearchParkForm />
    </section>
  );
};

export default HomeRoute;
