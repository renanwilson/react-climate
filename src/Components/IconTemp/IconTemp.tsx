import { useWeatherContext } from "Context/WeatherContext";
import { IconTemp } from "./styles";

export function IconTypes() {
  const { weather } = useWeatherContext();
  return (
    <IconTemp
      src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
      alt="Icon"
    />
  );
}
