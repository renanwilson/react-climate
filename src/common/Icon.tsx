import { useAppcontext } from "../Context/AppContext";

export function IconTypes() {
  const { weather } = useAppcontext();
  return (
    <img
      src={`icons/${weather.weather[0].icon}.png`}
      alt="Icon"
      width="70px"
      height="70px"
    />
  );
}
