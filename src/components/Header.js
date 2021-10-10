import React from 'react'
import { AppMenu, HeaderContainer, MenuButton, Microphone, SearchBox, SearchButton, SettingsMenu, SignIn } from '../styled-components/HeaderStyle'



//images
import microphone from '../styled-components/microphone.png'
import apps from '../styled-components/app-menu.png'
import settings from '../styled-components/settings.png'
import menu from '../styled-components/menubutton.png'
import search from '../styled-components/searchbutton.png'
import youtube from '../styled-components/youtube.png'

//font
import'../styled-components/Fonts.css';

export default function Header(props) {
    const viewSidebar = props.viewSidebar
    const setViewSidebar = props.setViewSidebar

    return (
        <HeaderContainer>
            <button onClick= {() => setViewSidebar(!viewSidebar)}>
            {viewSidebar ? "Hide Sidebar": "Show Sidebar"}</button>
            <img src={youtube} alt="" />
            <h1>YouTube</h1>
            <SearchBox type="text" placeholder="Search" />
            <SearchButton src={search} alt="" />
            <Microphone src={microphone} alt="" />
            <AppMenu src={apps} alt="" />
            <SettingsMenu src={settings} alt="" />
            <SignIn>SIGN IN</SignIn>
        </HeaderContainer>
    )
}
