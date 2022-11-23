import { Button } from "@mui/material";
import React from "react";

import { useGetWeather } from "../../../common/WeatherApi";
import { Container, Input } from "./index.style";

export function Index() {
  const { getWeatherButtonClick, getWeather, location, setLocation } =
    useGetWeather();

  return (
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
