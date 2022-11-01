import { BsFillEmojiSunglassesFill } from "react-icons/bs";

export const types = (temperatura: number) => {
  const Icones = (): JSX.Element => {
    return (
      <>
        <>{temperatura < 20 && <BsFillEmojiSunglassesFill />}</>
        <></>
      </>
    );
  };
  return <Icones />;
};
