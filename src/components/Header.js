import React from "react";
import {
  AppMenu,
  CenterMenu,
  HeaderContainer,
  LeftMenu,
  MenuButton,
  Microphone,
  RightMenu,
  SearchBox,
  SearchButton,
  SettingsMenu,
  SignIn,
  Title,
} from "../styled-components/HeaderStyle";

//images
import microphone from "../styled-components/microphone.png";
import apps from "../styled-components/app-menu.png";
import settings from "../styled-components/settings.png";
import menu from "../styled-components/menubutton.png";
import search from "../styled-components/searchbutton.png";
import youtube from "../styled-components/youtube.png";

//font
import "../styled-components/Fonts.css";

export default function Header(props) {
  const viewSidebar = props.viewSidebar;
  const setViewSidebar = props.setViewSidebar;

  return (
    <HeaderContainer>
      <LeftMenu>
        <MenuButton
          src={menu}
          alt=""
          onClick={() => setViewSidebar(!viewSidebar)}
        ></MenuButton>
        <img src={youtube} alt="" />
        <Title>YouTube</Title>
      </LeftMenu>
      <CenterMenu>
        <SearchBox type="text" placeholder="Search" />
        <SearchButton src={search} alt="" />
        <Microphone src={microphone} alt="" />
      </CenterMenu>
      <RightMenu>
        <AppMenu src={apps} alt="" />
        <SettingsMenu src={settings} alt="" />
        <SignIn>SIGN IN</SignIn>
      </RightMenu>
    </HeaderContainer>
  );
}
