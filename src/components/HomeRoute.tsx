import { useEffect, useState } from "react";
import NewsCardModel from "../models/NewsCardModel";
import { getNews } from "../services/NSPServices";
import HomeSearchParkForm from "./HomePageComponents/HomeSearchParkForm";
import NewsCard from "./HomePageComponents/NewsCard";
import "./HomeRoute.css";
import OpeningSection from "./OpeningSection";

const HomeRoute = () => {
  // This will store the news/articles on our homepage
  const [news, setNews] = useState<NewsCardModel[]>([]);
  // This state keeps track of when the user swipes the article section
  const [count, setCount] = useState<number>(0);

  // Gets the news/articles from the NPS API and stores it inside news state.
  const retrieveNews = (): void => {
    getNews().then((response) => setNews(response.data));
  };

  // Calls the retriveNews function to make it store news articles in news state.
  useEffect(() => {
    retrieveNews();
  }, []); // runs once

  console.log("run");
  // When the user clicks the left arrow button, brings left card to be on screen
  // when it is at its end of the first card, it will get the last card from the list
  const swipeNewsLeft = (): void => {
    if (count <= 0) {
      setCount(news.length - 1);
      return;
    }
    setCount((prev) => prev - 1);
  };

  // When the user clicks the right arrow button, brings right card to the screen
  // when it is as the end of the last card, it will restart count at the beginning of the card list.
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
