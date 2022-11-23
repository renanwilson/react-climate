import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { useAppcontext } from "../Context/AppContext";

const types = (temperatura: number) => {
  const Icones = (): JSX.Element => {
    return (
      <>
        <>{temperatura < 20 && <BsFillEmojiSunglassesFill />}</>
      </>
    );
  };
  return <Icones />;
};

export function IconTypes() {
  const { weather } = useAppcontext();
  const Icons = types(Number(weather.main.temp));

  return Icons;
}
