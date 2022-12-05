import { Button } from "@mui/material";
import React from "react";

import { useRequestsWeatherApi } from "common/RequestsWeatherApi";
import { useLocationContext } from "Context/LocationContext";
import { Container, Input } from "./Index.style";

export const Index = () => {
  const { getWeatherButtonClick, getWeather } = useRequestsWeatherApi();
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
};
