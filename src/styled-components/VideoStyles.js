import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10rem;
`;

export const EachVideoStyle = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 325px);
  grid-template-columns: repeat(4, 320px);
  color: white;
  margin: 20px;
  text-align: center;
  color: white;
  gap: 20px;
  font-family: "Noto Sans Display", sans-serif;
`;

export const VideoAutomation = styled.img`
  &:hover {
    transform: scale(1.1);
  }
`;
