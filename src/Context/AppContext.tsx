import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
interface Weather {
  name: string;
  main: {
    feels_like: string;
    humidity: string;
    pressure: string;
    temp: string;
    temp_max: string;
    temp_min: string;
  };
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
}
const INITIAL_STATE_WEATHER: Weather = {
  name: "",
  main: {
    feels_like: "",
    humidity: "",
    pressure: "",
    temp: "",
    temp_max: "",
    temp_min: "",
  },
  weather: [{ id: "", main: "", description: "", icon: "" }],
};

type AppContextProps = {
  apiCalled: boolean;
  setApiCalled: React.Dispatch<React.SetStateAction<boolean>>;
  weather: Weather;
  setWeather: React.Dispatch<React.SetStateAction<Weather>>;
};
type AppContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: AppContextProps = {
  apiCalled: false,
  setApiCalled: () => {},
  weather: INITIAL_STATE_WEATHER,
  setWeather: () => {},
};

export const AppContext = createContext<AppContextProps>(INITIAL_STATE);

export const useAppcontext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [apiCalled, setApiCalled] = useState(false);
  const [weather, setWeather] = useState(INITIAL_STATE_WEATHER);
  return (
    <AppContext.Provider
      value={{ apiCalled, setApiCalled, weather, setWeather }}
    >
      {children}
    </AppContext.Provider>
  );
};
