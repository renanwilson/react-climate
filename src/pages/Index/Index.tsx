import { Typography } from "@mui/material";
import React from "react";

import { Container, Aside, InputContainer, AsideContent } from "./styles";

import { InfoLocation } from "Components/InfoLocation/InfoLocation";
import { SearchInput } from "Components/SearchInput/SearchInput";
import { LocationList } from "Components/LocationList/LocationList";
import { WeatherInfos } from "Components/WeatherDetails/WeatherDetails";

export const ApiData = () => {
  return (
    <Container>
      <InfoLocation />

      <Aside>
        <InputContainer>
          <SearchInput />
        </InputContainer>
        <AsideContent>
          <LocationList title="Suas buscas recentes" />
          <Typography variant="h6">Detalhes</Typography>
          <WeatherInfos />
        </AsideContent>
      </Aside>
    </Container>
  );
};
