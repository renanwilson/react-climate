import { WeatherContextProvider } from "../Context/WeatherContext";
import { LocationContextProvider } from "../Context/LocationContext";
import { FC } from "react";
import { GeoLocationContextProvider } from "Context/GeoLocationContext";
import { ListContextProvider } from "Context/ListContext";

export const Allcontext = (Children: FC) => {
  return (
    <WeatherContextProvider>
      <LocationContextProvider>
        <GeoLocationContextProvider>
          <ListContextProvider>
            <Children />
          </ListContextProvider>
        </GeoLocationContextProvider>
      </LocationContextProvider>
    </WeatherContextProvider>
  );
};
