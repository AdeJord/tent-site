import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "@fontsource/roboto"; // Defaults to weight 400.

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 802px) {
    width: 100vh;
    display: none;
  }
`;

// i think the issue with the spacing of the links on main mav is in the below block.
const MainNavBar = styled.nav`
  color: white;
  // margin-top: .5vw;
  padding-top: 5px;
  font-size: 12px;
  font-family: "Roboto";
  font-weight: 100;
  background: #420C0C;
  width: 100%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  @media (max-width: 801px) {
    display: none;
  }
`;

const MainNavWrap = styled.div`
  font-family: "Roboto";
  width: 100%;
`;

const Mainnav = () => {
  const [mainNavbar, setMainNavbar] = useState(false);
  const showMainNavbar = () => setMainNavbar(!mainNavbar);

  const [subNavIndex, setSubNavIndex] = useState(1);
  const openSubNav = (index) => setSubNavIndex(index);

  return (
    <MainNavWrap>
      <MainNavBar mainNavbar={mainNavbar}>
        {SidebarData.map((item, index) => {
          return (
            <SubMenu
              item={item}
              key={index}
              closeParent={showMainNavbar}
              subNavIndex={subNavIndex}
              openSubNav={openSubNav}
            />
          );
        })}
      </MainNavBar>
    </MainNavWrap>
  );
};

export default Mainnav;
