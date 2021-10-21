import styled from "styled-components";

import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: #202020;
  list-style: none;
  height: 80%;
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 0;
  margin-top: 50px;
  margin-right: 500rem;
  left: 0;
  padding-top: 20px;
`;

export const SidebarLink = styled(Link)`
  list-style-type: none;
  margin: 0;
  margin-bottom: 50px;
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  font-family: "Noto Sans Display", sans-serif;
  display: flex;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  color: white;
  :hover {
    background-color: #383838;
    cursor: pointer;
  }
`;
