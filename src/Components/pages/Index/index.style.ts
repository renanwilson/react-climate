import styled from "styled-components";
import { TextField } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Card = styled.div`
  width: 50%;
  height: 75%;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgb(25 31 35 / 24%);
  flex-direction: column;
  border: 1px solid;
  border-radius: 12px;
  padding: 20px;
`;
export const Temperatura = styled.div`
  width: 50%;
  justify-content: space-around;
  margin-top: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgb(25 31 35 / 24%);
  border: 1px solid;
  border-radius: 12px;
  padding: 20px;
`;
export const Input = styled(TextField)`
  width: 50%;
  text-align: center;
`;
