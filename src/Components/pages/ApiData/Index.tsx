import { Typography } from "@mui/material";
import React from "react";

import { Container, Card, Temperatura } from "../Index/index.style";
import { IconTypes } from "../../../common/Icon";
import { useAppcontext } from "../../../Context/AppContext";

export function ApiData() {
  const { weather } = useAppcontext();
  return (
    <>
      <Container>
        <Card>
          <IconTypes />
          <Typography variant="h3">{weather.name}</Typography>
          <Temperatura>
            <Typography variant="h4">{weather.main.temp}</Typography>
          </Temperatura>
        </Card>
      </Container>
    </>
  );
}
