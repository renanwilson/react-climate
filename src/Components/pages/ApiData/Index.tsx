import { Typography } from "@mui/material";
import React from "react";

import {
  Container,
  Card,
  Place,
  Information,
  Temperatura,
  Nuvems,
} from "./Index.style";
import { IconTypes } from "../../../common/Icon";
import { useAppcontext } from "../../../Context/AppContext";

export function ApiData() {
  const { weather } = useAppcontext();
  return (
    <>
      <Container>
        <Card>
          <Place>
            <Typography variant="h3">{weather.name}</Typography>
          </Place>
          <Information>
            <Temperatura>
              <IconTypes />
              <Typography variant="h4">{weather.main.temp}°C</Typography>
            </Temperatura>
            <Nuvems>
              <Typography variant="h4">{weather.main.temp}°C</Typography>
            </Nuvems>
          </Information>
        </Card>
      </Container>
    </>
  );
}
