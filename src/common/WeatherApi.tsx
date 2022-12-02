import axios from "axios";

import { useApiCalled } from "../Context/ApiCalledContext";
import { useLocationContext } from "../Context/LocationContext";

import { useWeatherContext } from "../Context/WeatherContext";

export function useGetWeather() {
  const { setWeather } = useWeatherContext();
  const { setApiCalled } = useApiCalled();
  const { setLocation, location } = useLocationContext();

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
          setApiCalled(true);
        })
        .catch(() => {
          alert("Digite apenas Cidades, Estados, Bairros e paises.");
        });
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
        setLocation("");
        setApiCalled(true);
      })
      .catch(() => {
        alert("Digite apenas Cidades, Estados, Bairros e paises.");
      });
  };

  return {
    getWeatherButtonClick,
    getWeather,
    location,
    setLocation,
  };
}
