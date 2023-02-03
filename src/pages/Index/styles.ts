import styled from "styled-components";
import image from "assets/img/wetplant.jpg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Aside = styled.div`
  width: 40%;
  padding: 24px;
  background: rgba(128, 128, 128, 0.29);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
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
