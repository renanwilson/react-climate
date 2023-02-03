import { Details, DetailsFont } from "../styles";
import { Content } from "./Content";
export function ContentList() {
  const { Info } = Content();
  return (
    <>
      {Info.map((info) => {
        return (
          <Details>
            <DetailsFont variant="inherit">{info.title}</DetailsFont>
            <DetailsFont variant="inherit">{info.info} %</DetailsFont>
          </Details>
        );
      })}
    </>
  );
}
