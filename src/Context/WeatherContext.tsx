import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
interface Weather {
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    pressure: string;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
}
const INITIAL_STATE_WEATHER: Weather = {
  name: "",
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  },
  weather: [{ id: "", main: "", description: "", icon: "" }],
  wind: { speed: 0, deg: 0, gust: 0 },
  clouds: { all: 0 },
};

type WeatherContextProps = {
  weather: Weather;
  setWeather: Dispatch<SetStateAction<Weather>>;
};
type WeatherContextProviderProps = {
  children: ReactElement;
};
const INITIAL_STATE: WeatherContextProps = {
  weather: INITIAL_STATE_WEATHER,
  setWeather: () => {},
};

export const WeatherContext = createContext<WeatherContextProps>(INITIAL_STATE);

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherContextProvider = ({
  children,
}: WeatherContextProviderProps) => {
  const [weather, setWeather] = useState(INITIAL_STATE_WEATHER);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
