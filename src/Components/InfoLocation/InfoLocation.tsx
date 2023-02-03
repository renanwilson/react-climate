import { Typography } from "@mui/material";
import { getDate } from "common/getDate";
import { IconTypes } from "Components/IconTemp/IconTemp";
import { useWeatherContext } from "Context/WeatherContext";
import {
  Location,
  Info,
  Description,
  AsideImage,
  Content,
  Temperatura,
} from "./styles";

export function InfoLocation() {
  const { weather } = useWeatherContext();

  const dateString = getDate();

  return (
    <AsideImage>
      <Content>
        <Temperatura variant="h1" fontWeight="600">
          {weather.main.temp.toFixed()}°
        </Temperatura>
        <Location>
          <Info>
            <Typography variant="h3">{weather.name}</Typography>
            <IconTypes />
          </Info>
          <Description>
            <Typography variant="inherit" fontWeight="100" fontSize="20px">
              {dateString}
            </Typography>
            <Typography variant="inherit" fontWeight="100" fontSize="20px">
              {weather.weather[0].description}
            </Typography>
          </Description>
        </Location>
      </Content>
    </AsideImage>
  );
}
