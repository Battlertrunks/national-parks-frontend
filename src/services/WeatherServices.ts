import axios from "axios";
import WeatherResponse from "../models/WeatherResponse";

const key: string = process.env.REACT_APP_WEATHER_KEY || "";

export const getWeather = async (): Promise<WeatherResponse> => {
  return (
    await axios.get("http://api.weatherapi.com/v1/current.json", {
      params: { api_key: key },
    })
  ).data;
};
