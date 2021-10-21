import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EachVideoStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 325px);
  grid-template-columns: repeat(4, 320px);
  color: white;
  margin: 20px;
  text-align: center;
  color: white;
  gap: 10px;
  font-family: "Noto Sans Display", sans-serif;
`;
