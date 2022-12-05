import { useWeatherContext } from "Context/WeatherContext";
import { IconTemp } from "./Icons.styles";

export function IconTypes() {
  const { weather } = useWeatherContext();
  return <IconTemp src={`icons/${weather.weather[0].icon}.png`} alt="Icon" />;
}
