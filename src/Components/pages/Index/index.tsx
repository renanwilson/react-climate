import { Button, Typography } from "@mui/material";
import React from "react";

import { useGetWeather } from "../../../common/WeatherApi";
import { Container, Input, Card, Temperatura } from "./index.style";
import { types } from "../../../common/Icon";

export function Index() {
  const { getWeatherButtonClick, weather, getWeather, location, setLocation } =
    useGetWeather();

  return weather.main ? (
    <>
      <Container>
        <Card>
          {types(weather.main["temp"])}
          <Typography variant="h3">{weather.name}</Typography>
          <Temperatura>
            <Typography variant="h4">{weather.main["temp"]}</Typography>
          </Temperatura>
        </Card>
      </Container>
    </>
  ) : (
    <Container>
      <Input
        color="secondary"
        variant="outlined"
        placeholder="Insira aqui um bairro ou estado"
        value={location}
        onKeyPress={getWeather}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button onClick={getWeatherButtonClick}>Enviar</Button>
    </Container>
  );
}
