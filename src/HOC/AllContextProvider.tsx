import { ApiCalledProvider } from "../Context/ApiCalledContext";
import { WeatherContextProvider } from "../Context/WeatherContext";
import { LocationContextProvider } from "../Context/LocationContext";
import { FC } from "react";

export const Allcontext = (Children: FC) => {
  return (
    <WeatherContextProvider>
      <ApiCalledProvider>
        <LocationContextProvider>
          <Children />
        </LocationContextProvider>
      </ApiCalledProvider>
    </WeatherContextProvider>
  );
};
