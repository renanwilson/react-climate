import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
interface Weather {
  name: string;
  main: {
    temp: string;
  };
}
const INITIAL_STATE_WEATHER: Weather = {
  name: "",
  main: {
    temp: "",
  },
};

type AppContextProps = {
  apiCalled: number;
  setApiCalled: React.Dispatch<React.SetStateAction<number>>;
  weather: Weather;
  setWeather: React.Dispatch<React.SetStateAction<Weather>>;
};
type AppContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: AppContextProps = {
  apiCalled: 0,
  setApiCalled: () => {},
  weather: INITIAL_STATE_WEATHER,
  setWeather: () => {},
};

export const AppContext = createContext<AppContextProps>(INITIAL_STATE);

export const useAppcontext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [apiCalled, setApiCalled] = useState(0);
  const [weather, setWeather] = useState(INITIAL_STATE_WEATHER);
  return (
    <AppContext.Provider
      value={{ apiCalled, setApiCalled, weather, setWeather }}
    >
      {children}
    </AppContext.Provider>
  );
};
