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

type WeatherContextProps = {
  weather: Weather;
  setWeather: React.Dispatch<React.SetStateAction<Weather>>;
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
