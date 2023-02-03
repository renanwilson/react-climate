import { ApiData } from "pages/Index/Index";
import { useGeoLocationContext } from "Context/GeoLocationContext";
import { useWeatherContext } from "Context/WeatherContext";
import { Allcontext } from "HOC/AllContextProvider";
import { useEffect } from "react";
import { WeatherApi } from "services/WeatherApi";

import "./index.css";

export const Content = () => {
  const { lat, long } = useGeoLocationContext();
  const { setWeather } = useWeatherContext();

  useEffect(() => {
    WeatherApi.get("", {
      params: {
        lat: lat,
        lon: long,
      },
    }).then((resp) => {
      setWeather(resp.data);
    });
  }, [lat, long, setWeather]);

  return <ApiData />;
};
export const App = (): JSX.Element => Allcontext(Content);
