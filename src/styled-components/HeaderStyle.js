import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #202020;
  grid-area: header;
  display: flex;
  flex-direction: row;
  font-family: "Noto Sans Display", sans-serif;
  color: white;
  height: 75px;
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

export const MenuButton = styled.button`
  margin-right: 10px;
  margin-left: 10px;
  height: 20px;
`;

export const SearchBox = styled.input`
  margin-left: 10px;
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
`;

export const AppMenu = styled.img`
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const SettingsMenu = styled.img`
  height: 35px;
  margin-right: 10px;
  margin-left: 10px;
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
`;
