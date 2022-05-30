import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
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
padding-top: 7px;
font-family: "Roboto";
font-weight: 100;
background: #1a1111;
width: 100%;
height: 5vh;
display: flex;
flex-direction: row;
justify-content: space-between;
position: relative;
display: flex;
@media (max-width: 802px) {
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
        <>
                <MainNavWrap>
                    <MainNavBar mainNavbar={mainNavbar}>
                        {SidebarData.map((item, index) => {
                            return <SubMenu item={item} key={index} closeParent={showMainNavbar} subNavIndex={subNavIndex} openSubNav={openSubNav} />;
                        })}
                    </MainNavBar>
                </MainNavWrap>
        </>
    )
}

export default Mainnav