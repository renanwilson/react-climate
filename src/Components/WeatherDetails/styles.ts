import { Typography } from "@mui/material";
import styled from "styled-components";

export const WeatherDetails = styled.div`
  display: flex;
  flex-direction: column !important;
  padding-bottom: 10%;
  border-bottom: 1px solid grey;
`;
export const Details = styled.div`
  margin-top: 10%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
export const DetailsFont = styled(Typography)`
  font-size: 20px;
  font-weight: 100;
  color: #d3d3d3;
`;
