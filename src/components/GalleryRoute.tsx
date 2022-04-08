import SearchForm from "./SearchPageComponents/SearchForm";
import "./GalleryRoute.css";
import { useEffect, useState } from "react";
import TrendingCardsModel from "../models/TrendingCardModel";
import { useSearchParams } from "react-router-dom";
import { getParksBySearch } from "../services/NSPServices";
import Params from "../models/Params";
import ParkCard from "./ParkCard";

const SearchParkRoute = () => {
  const [parks, setParks] = useState<TrendingCardsModel[]>([]);

  const [searchParams] = useSearchParams();
  const searchQuery: string | null = searchParams.get("q")!;
  const stateCode: string | null = searchParams.get("stateCode")!;
  const parkCode: string | null = searchParams.get("parkCode")!;

  const searchDepenencies: Params = {
    ...(searchQuery ? { q: searchQuery } : {}),
    ...(stateCode ? { stateCode } : {}),
    ...(parkCode ? { parkCode } : {}),
  };

  console.log(searchDepenencies);

  useEffect(() => {
    if (searchDepenencies) {
      getParksBySearch(searchDepenencies).then((response) => {
        setParks(response.data);
      });
    }
  }, [searchQuery, stateCode, parkCode]);

  return (
    <div className="SearchParkRoute">
      <SearchForm />
      {parks.map((park) => (
        <ParkCard onDisplay={park} key={park.id} />
      ))}
    </div>
  );
};

export default SearchParkRoute;
