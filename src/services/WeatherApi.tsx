import axios from "axios";

export const WeatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather?",
  params: {
    appid: process.env.REACT_APP_OPEN_WHEATER_KEY,
    lang: "pt_br",
    units: "metric",
  },
});
