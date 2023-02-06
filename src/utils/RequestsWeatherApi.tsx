import { useListContext } from "Context/ListContext";
import { useCallback } from "react";
import { useLocationContext } from "../Context/LocationContext";

import { useWeatherContext } from "../Context/WeatherContext";
import { WeatherApi } from "../services/WeatherApi";

export const useRequestsWeatherApi = () => {
  const { setWeather } = useWeatherContext();

  const { location } = useLocationContext();
  const { list, setList } = useListContext();
  const handleInput: React.KeyboardEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;
        if (list.length >= 3) {
          list.pop();
        }
        list.unshift({ location: e.currentTarget.value });
        e.currentTarget.value = "";
        setList([...list]);
        WeatherApi.get("", {
          params: {
            q: location,
          },
        })
          .then((response) => {
            setWeather(response.data);
          })
          .catch(() => {
            alert("Digite apenas Cidades, Estados, Bairros e paises.");
          });
      }
    },
    [list, location, setWeather, setList]
  );

  return {
    handleInput,
  };
};
