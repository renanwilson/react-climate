import { Details, DetailsFont } from "../styles";
import { Content } from "./Content";
export function ContentList() {
  const { Info } = Content();
  return (
    <>
      {Info.map(({ title, info }) => {
        return (
          <Details key={title}>
            <DetailsFont variant="inherit">{title}</DetailsFont>
            <DetailsFont variant="inherit">{info} %</DetailsFont>
          </Details>
        );
      })}
    </>
  );
}
