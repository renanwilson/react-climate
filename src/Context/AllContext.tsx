import { ApiCalledProvider } from "./ApiCalledContext";
import { WeatherContextProvider } from "./WeatherContext";
import { LocationContextProvider } from "./LocationContext";

export const Allcontext = (children: JSX.Element) => {
  return (
    <WeatherContextProvider>
      <ApiCalledProvider>
        <LocationContextProvider>{children}</LocationContextProvider>
      </ApiCalledProvider>
    </WeatherContextProvider>
  );
};
