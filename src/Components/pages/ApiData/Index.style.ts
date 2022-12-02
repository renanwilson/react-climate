import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { IconTypes } from "../../../common/Icon";

export const Container = styled(Grid)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;
export const Card = styled(Grid)`
  padding: 12px;
  box-shadow: 0px 2px 4px rgb(25 31 35 / 24%);
  border: 1px solid;
  border-radius: 12px;
`;
export const IconTemp = styled(IconTypes)`
  width: 0px;
  height: 0px;
`;
export const Place = styled(Typography)``;
export const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10%;
`;
export const Temperatura = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
export const Nuvems = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
export const Imagem = styled.img`
  width: 100px;
  height: 100px;
`;
