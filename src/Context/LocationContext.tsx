import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

type LocationContextProps = {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};
const INITIAL_STATE: LocationContextProps = {
  location: "",
  setLocation: () => "",
};
type LocationContextProviderProps = {
  children: ReactElement;
};
export const LocationContext = createContext(INITIAL_STATE);
export const useLocationContext = () => useContext(LocationContext);

export const LocationContextProvider = ({
  children,
}: LocationContextProviderProps) => {
  const [location, setLocation] = useState("");
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
