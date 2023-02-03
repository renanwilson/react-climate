import { Typography } from "@mui/material";
import styled from "styled-components";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const AsideImage = styled.div`
  width: 60%;
  color: white;
  display: flex;
  align-items: flex-end;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  width: 60%;
  font-weight: 600 !important;
`;
export const Location = styled.div`
  width: 60%;
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Temperatura = styled(Typography)`
  font-size: 14rem !important;
  font-weight: 400 !important;
`;
