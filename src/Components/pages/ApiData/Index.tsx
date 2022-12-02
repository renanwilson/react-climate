import { Grid, Typography } from "@mui/material";
import React from "react";

import { Container, Card, IconTemp } from "./Index.style";

import { useAppcontext } from "../../../Context/AppContext";

export function ApiData() {
  const { weather } = useAppcontext();
  let pressure = Number(weather.main.pressure) / 100;

  return (
    <Container container direction="column">
      <Card item xs={12} lg={2}>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Typography variant="h4">{weather.name}</Typography>
          <IconTemp />
        </Grid>
        <Grid item xs={12} alignItems="center" justifyContent="center">
          <Typography variant="h5"> Min: {weather.main.temp_min}°C</Typography>
          <Typography variant="h5"> Atual: {weather.main.temp}°C</Typography>
          <Typography variant="h5"> Max: {weather.main.temp_max}°C</Typography>
        </Grid>

        <Typography variant="h5">
          Humidade: {weather.main.humidity}°C
        </Typography>
        <Typography variant="h5">Pressão: {pressure}%</Typography>
      </Card>
    </Container>
  );
}

// TODO: ADJUST STYLES
