import { Typography } from "@mui/material";
import styled from "styled-components";
import image from "assets/img/wetplant.jpg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AiOutlineSearch } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
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
export const DescriptionTexts = styled(Typography)`
  font-weight: 100 !important;
`;
export const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Temperatura = styled(Typography)`
  font-size: 14rem !important;
  font-weight: 400 !important;
`;
export const Aside = styled.div`
  width: 40%;
  padding: 24px;
  background: rgba(128, 128, 128, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
`;
export const SearchIcon = styled(AiOutlineSearch)`
  color: #ffff;
  margin: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const AsideContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  color: #fff;
  margin: 15%;
  font-size: 15px !important;
`;
export const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 100;
  padding-bottom: 10px;
  border-bottom: 1px solid grey;
  color: #d3d3d3;
`;
export const Recents = styled.div`
  font-size: 20px;
  font-weight: 100;
  margin-top: 10%;
  color: #d3d3d3;
`;
export const RecentsContainer = styled.div`
  padding-bottom: 10%;
  border-bottom: 1px solid grey;
  margin-bottom: 10%;
`;

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
