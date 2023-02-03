import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

type GeoLocationContextProps = {
  lat: number;
  long: number;
};
const INITIAL_STATE: GeoLocationContextProps = {
  lat: 0,
  long: 0,
};
type GeoLocationContextProviderProps = {
  children: ReactElement;
};
export const GeoLocationContext = createContext(INITIAL_STATE);
export const useGeoLocationContext = () => useContext(GeoLocationContext);

export const GeoLocationContextProvider = ({
  children,
}: GeoLocationContextProviderProps) => {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [setLat, setLong]);
  return (
    <GeoLocationContext.Provider value={{ lat, long }}>
      {children}
    </GeoLocationContext.Provider>
  );
};
