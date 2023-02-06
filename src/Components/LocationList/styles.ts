import { Typography } from "@mui/material";
import styled from "styled-components";

export const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
`;
export const Recents = styled.div`
  font-size: 20px;
  font-weight: 100;
  margin-top: 10%;
  color: #d3d3d3;
  @media (max-width: 1000px) {
    color: #000 !important;
  }
`;
export const RecentsContainer = styled.div`
  padding-bottom: 10%;
  border-bottom: 1px solid grey;
  margin-bottom: 10%;
  color: #d3d3d3;
  @media (max-width: 1000px) {
    color: #000 !important;
  }
`;
