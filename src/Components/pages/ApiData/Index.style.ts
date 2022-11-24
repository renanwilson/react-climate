import styled from "styled-components";

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
export const Place = styled.div`
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
