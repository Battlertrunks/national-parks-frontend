import axios from "axios";
import WeatherModel from "../models/WeatherModel";

// The API key to access our weather API
const key: string = process.env.REACT_APP_WEATHER_KEY || "";

// retrieving the data of the weather at a location using the zip/postal code
export const getWeather = async (zipCode: string): Promise<WeatherModel> => {
  return (
    await axios.get("http://api.weatherapi.com/v1/current.json", {
      params: { key: key, q: zipCode },
    })
  ).data;
};
