import axios from "axios";
import WeatherModel from "../models/WeatherModel";

const key: string = process.env.REACT_APP_WEATHER_KEY || "";

export const getWeather = async (zipCode: string): Promise<WeatherModel> => {
  return (
    await axios.get("http://api.weatherapi.com/v1/current.json", {
      params: { key: key, q: zipCode },
    })
  ).data;
};
