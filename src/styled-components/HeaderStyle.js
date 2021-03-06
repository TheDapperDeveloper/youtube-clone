import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #202020;
  justify-content: center;
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  font-family: "Noto Sans Display", sans-serif;
  color: white;
  height: 75px;
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    display: flex;
    align-items: center;
    background-color: #202020;
    justify-content: center;
    display: flex;
    flex-direction: row;
    font-family: "Noto Sans Display", sans-serif;
    color: white;
    height: 75px;
  }
`;

export const LeftMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  float: left;
`;

export const CenterMenu = styled.div`
  display: flex;
  margin-left: 400px;
`;

export const RightMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 350px;
`;

export const MenuButton = styled.img`
  margin-right: 175px;
  margin-left: 5px;
  margin-top: 15px;
  height: 40px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SearchBox = styled.input`
  height: 35px;
  background-color: #121212;
  color: white;
  border-radius: 2px;
  width: 500px;
  border: 1px solid;
  border-color: #303030;
`;

export const SearchButton = styled.img`
  margin-right: 10px;
  height: 42px;
`;

export const Microphone = styled.img`
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const AppMenu = styled.img`
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SettingsMenu = styled.img`
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SignIn = styled.button`
  height: 40px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: transparent;
  color: #3da1f6;
  border: 2px solid #3da1f6;
  border-radius: 2px;
  width: 100px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Title = styled.h1`
  margin-left: 10px;
`;
