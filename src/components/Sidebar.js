import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Header from './Header';
import Header2 from './Header2'
import "@fontsource/roboto"; // Defaults to weight 400.

const Nav = styled.div`
font-family: "Roboto";
  background: #114709;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const NavContainer = styled.div`
font-family: "Roboto";
display: flex;
flex-direction: column;
align-items: center;
`

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 5vw;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 802px) {
    display: none;
  }
`;

const SidebarNav = styled.nav`
font-family: "Roboto";
  background: #114709;
  width: 250px;
  padding-bottom: 20px;
  display: flex;
  autofocus;
  border: 1mm ridge black;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 250ms;
  z-index: 10;
  @media (min-width: 802) {
    display: none;
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [subNavIndex, setSubNavIndex] = useState(1);
  const openSubNav = (index) => setSubNavIndex(index);

  const test = () => {
    showSidebar();
    console.log('showsidebaaaar');
    setSidebar(!sidebar)
  }

  return (
    //code to make sidebar hide is https://stackoverflow.com/questions/66626487/hiding-sidebar-component-on-outside-click
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
        <Nav>
        <NavContainer>
        
          <NavIcon to='#' onClick={test}>
            <FaIcons.FaBars />
            
          </NavIcon>
          </NavContainer>
          {/* <Header /> */}
          <Header2 />
        </Nav>
  
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#' onClick={test}>
              <AiIcons.AiOutlineClose />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} closeParent={showSidebar} subNavIndex={subNavIndex} openSubNav={openSubNav} />;
            })}
          </SidebarWrap>
        </SidebarNav>

      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
