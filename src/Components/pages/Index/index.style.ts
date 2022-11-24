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

export const Input = styled(TextField)`
  width: 50%;
  text-align: center;
`;
