import { useApiCalled } from "Context/ApiCalledContext";
import { useLocationContext } from "Context/LocationContext";
import { useWeatherContext } from "Context/WeatherContext";
import { WeatherApi } from "services/WeatherApi";

export const useRequestWeatherApi = (event: any) => {
  const { setLocation, location } = useLocationContext();
  const { setWeather } = useWeatherContext();
  const { setApiCalled } = useApiCalled();

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
