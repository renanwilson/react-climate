import { useApiCalled } from "../Context/ApiCalledContext";
import { useLocationContext } from "../Context/LocationContext";

import { useWeatherContext } from "../Context/WeatherContext";
import { WeatherApi } from "../services/WeatherApi";

export function useGetWeather() {
  const { setWeather } = useWeatherContext();
  const { setApiCalled } = useApiCalled();
  const { setLocation, location } = useLocationContext();

  const getWeather = (event: any) => {
    if (event.key === "Enter") {
      WeatherApi.get("", {
        params: {
          q: location,
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
    WeatherApi.get("", {
      params: {
        q: location,
      },
    })
      .then((response) => {
        setWeather(response.data);
        setApiCalled(true);
      })
      .catch(() => {
        alert("Digite apenas Cidades, Estados, Bairros e paises.");
      });
  };

  return {
    getWeatherButtonClick,
    getWeather,
  };
}
