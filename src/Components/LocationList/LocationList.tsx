import { useListContext } from "Context/ListContext";
import { Recents, RecentsContainer, Title } from "./styles";

type LocationListType = {
  title: string;
};
export function LocationList({ title }: LocationListType) {
  const { list } = useListContext();
  return (
    <>
      <Title variant="inherit">{title}</Title>
      <RecentsContainer>
        {list.map(({ location }) => {
          return <Recents>{location}</Recents>;
        })}
      </RecentsContainer>
    </>
  );
}
