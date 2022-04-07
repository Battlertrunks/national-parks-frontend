import SearchForm from "./SearchPageComponents/SearchForm";
import "./GalleryRoute.css";
import { useEffect, useState } from "react";
import TrendingCardsModel from "../models/TrendingCardModel";
import { useSearchParams } from "react-router-dom";
import { getParksBySearch } from "../services/NSPServices";

const SearchParkRoute = () => {
  const [parks, setParks] = useState<TrendingCardsModel[]>([]);

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    if (searchQuery) {
      getParksBySearch(searchQuery).then((response) => {
        setParks(response.data);
      });
    }
  }, [searchParams]);

  console.log(parks);

  return (
    <div className="SearchParkRoute">
      <SearchForm />
    </div>
  );
};

export default SearchParkRoute;
