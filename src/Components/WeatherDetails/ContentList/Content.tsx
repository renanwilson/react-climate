import { useWeatherContext } from "Context/WeatherContext";
type infoType = {
  title: string;
  info: string | number;
};
interface IContent {
  Info: infoType[];
}
export function Content(): IContent {
  const { weather } = useWeatherContext();

  const Info = [
    { title: "Nuvens", info: `${weather.clouds.all} %` },
    { title: "Vento", info: `${weather.wind.speed} m/s` },
    { title: "Sensação", info: `${weather.main.feels_like.toFixed()}°` },
    { title: "Humidade", info: `${weather.main.humidity.toFixed()}%` },
  ];
  return { Info };
}
