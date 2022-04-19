import SearchForm from "./SearchPageComponents/SearchForm";
import "./GalleryRoute.css";
import { useEffect, useState } from "react";
import NationalParksCard from "../models/NationalParksCard";
import { useSearchParams } from "react-router-dom";
import { getParksBySearch } from "../services/NSPServices";
import Params from "../models/Params";
import ParkCard from "./ParkCard";

const SearchParkRoute = () => {
  // This state will the parks to display in a array
  const [parks, setParks] = useState<NationalParksCard[]>([]);

  // Set up a search params to find parks that users search for.
  // These values will be stored in the variables if they are within the params in the url
  const [searchParams] = useSearchParams();
  const searchQuery: string | null = searchParams.get("q")!;
  const stateCode: string | null = searchParams.get("stateCode")!;
  const parkCode: string | null = searchParams.get("parkCode")!;

  // Checks if search depenencies contains at least one value to be truthy.
  // if truthy then it will retrive parks based off of the params and
  // store them in parks state.
  useEffect(() => {
    // Setting up the params checking if these variables have value
    // if no value then it will be a empty object,
    // if there is a value, then it will contain a property of the value
    const searchDepenencies: Params = {
      ...(searchQuery ? { q: searchQuery } : {}),
      ...(stateCode ? { stateCode } : {}),
      ...(parkCode ? { parkCode } : {}),
    };

    getParksBySearch(searchDepenencies).then((response) => {
      setParks(response.data);
    });
  }, [searchQuery, stateCode, parkCode]); // Will run useEffect if these values change.

  return (
    <div className="SearchParkRoute">
      <SearchForm />
      <h2 className="centered">Results</h2>
      <div className="parks-list">
        {parks.map((park) => (
          <ParkCard onDisplay={park} key={park.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchParkRoute;
