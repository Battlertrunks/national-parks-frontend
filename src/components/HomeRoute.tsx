import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import TrendingCardsModel from "../models/TrendingCardModel";
import { getAttendedParks } from "../services/AttendedParkServices";
import { getThingsToDo } from "../services/NSPServices";
import AboutUs from "./AboutUs";
import HomeSearchParkForm from "./HomePageComponents/HomeSearchParkForm";
import TrendingCard from "./HomePageComponents/TrendingCard";
import "./HomeRoute.css";
import OpeningSection from "./OpeningSection";

const HomeRoute = () => {
  const [trending, setTrending] = useState<TrendingCardsModel[]>([]);
  const [count, setCount] = useState<number>(0);

  const { user } = useContext(AuthContext);

  const retrieveThingsToDo = (): void => {
    getThingsToDo().then((response) => setTrending(response.data));
  };

  useEffect(() => {
    retrieveThingsToDo();
  }, []);

  // TODO THIS IS A TEST TO BE DELETED LATER!!!!
  useEffect(() => {
    if (user) {
      getAttendedParks(user.uid).then((response) => console.log(response));
    }
  });

  // console.log(count);

  const swipeLeft = (): void => {
    if (count <= 0) {
      setCount(trending.length - 1);
      return;
    }
    setCount((prev) => prev - 1);
  };

  const swipeRight = (): void => {
    if (count >= trending.length - 1) {
      setCount(0);
      return;
    }
    setCount((prev) => prev + 1);
  };

  return (
    <section className="HomeRoute">
      <OpeningSection />
      <h2>Trending Parks</h2>
      <div className="trending-parks-container">
        <button onClick={() => swipeLeft()} className="left-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <ul className="slide-content">
          {trending.map((item) => (
            <TrendingCard displayContent={item} onSlide={count} />
          ))}
        </ul>
        <button onClick={() => swipeRight()} className="right-btn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <h2>Search National Parks</h2>
      <HomeSearchParkForm />
      <h2>About Us</h2>
      <AboutUs />
    </section>
  );
};

export default HomeRoute;
