import { Button } from "@mui/material";
import React from "react";

import { useGetWeather } from "../../../common/WeatherApi";
import { useLocationContext } from "../../../Context/LocationContext";
import { Container, Input } from "./Index.style";

export function Index() {
  const { getWeatherButtonClick, getWeather } = useGetWeather();
  const { location, setLocation } = useLocationContext();

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
