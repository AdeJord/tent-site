import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    width: 100vh;
    display: none;
  }
`;
const MainNavBar = styled.nav`
background: #114709;
color: red;
width: 100vw;
height: 8vh;
display: flex;
flex-direction: row;
justify-content: space-around;;
position: relative;
z-index: 10;
display: none;
@media (min-width: 768px) {
  display: flex;
}
`;

const MainNavWrap = styled.div`
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