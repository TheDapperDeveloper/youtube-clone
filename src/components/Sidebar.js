import React from 'react'
import { SidebarContainer } from '../styled-components/SidebarStyle'


import { sidebardata } from './SidebarLinkData.js';
import SidebarLinks from './SidebarLinks.js';

import '../styled-components/Fonts.css';


export default function Sidebar(props) {
    const viewSidebar = props.viewSidebar
    return (
        <>
        {viewSidebar ? (
        <SidebarContainer> {sidebardata?.map((linkData) => (<SidebarLinks linkData={linkData}/>))}
        </SidebarContainer>
    ) : ""}
     </>
    );
}
