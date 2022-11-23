import axios from "axios";
import { useState } from "react";
import { useAppcontext } from "../Context/AppContext";

export function useGetWeather() {
  const [location, setLocation] = useState("");
  const { setApiCalled, setWeather } = useAppcontext();

  const getWeather = (event: any) => {
    if (event.key === "Enter") {
      axios
        .get("http://api.openweathermap.org/data/2.5/weather?", {
          params: {
            q: location,
            appid: process.env.REACT_APP_OPEN_WHEATER_KEY,
            lang: "pt_br",
            units: "metric",
          },
        })
        .then((response) => {
          setWeather(response.data);
          console.log(response.data);
        });
      setApiCalled(2);
      setLocation("");
    }
  };
  const getWeatherButtonClick = () => {
    axios
      .get("http://api.openweathermap.org/data/2.5/weather?", {
        params: {
          q: location,
          appid: process.env.REACT_APP_OPEN_WHEATER_KEY,
          lang: "pt_br",
          units: "metric",
        },
      })
      .then((response) => {
        setWeather(response.data);
      });
    setApiCalled(2);
    setLocation("");
  };

  return {
    getWeatherButtonClick,
    getWeather,
    location,
    setLocation,
  };
}
