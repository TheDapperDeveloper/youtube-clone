import styled from "styled-components";

export const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10rem;
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    display: flex;
    width: 375px;
    height: 700px;
  }
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
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: white;
    margin: 20px;
    text-align: center;
    color: white;
    gap: 20px;
    font-family: "Noto Sans Display", sans-serif;
  }
`;

export const VideoAutomation = styled.img`
  &:hover {
    transform: scale(1.1);
  }
`;
