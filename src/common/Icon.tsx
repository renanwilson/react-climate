import { useWeatherContext } from "../Context/WeatherContext";

export function IconTypes() {
  const { weather } = useWeatherContext();
  return (
    <img
      src={`icons/${weather.weather[0].icon}.png`}
      alt="Icon"
      width="70px"
      height="70px"
    />
  );
}
