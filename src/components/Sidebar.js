import React, { useState } from 'react';
import '../App.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Header2 from './Header2'
import "@fontsource/roboto"; // Defaults to weight 400.
import SideBarToggle from './sideBarToggle';
import Backdrop from './Backdrop'
import './Backdrop.css'


const Nav = styled.div`
font-family: "Roboto";
  background: #300909;
    // background: #9fdda8;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
height: auto;
`;

const NavContainer = styled.div`
font-family: "Roboto";
display: flex;
height: 50px;
width: auto;
flex-direction: column;
align-items: center;
position: relative;
`;

const SidebarNav = styled.nav`
  font-family: "Roboto";
  font-size: 2vw;
  background: #300909;
  width: 55vw;
  height: auto;
  opacity: 92%;
  // overflow: scroll;
  padding-bottom: 20px;
  border: 1mm ridge black;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 300ms;
  z-index: 10;

  @media (min-width: 802px) {
    display: none;
  }
`;

const NavIcon = styled(Link)`
  font-size: 5vw;
  width: 15vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 8;
  @media (min-width: 802px) {
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
    console.log(sidebar);
  }


  const closeDrawerHandler = () => {
    setSidebar(false);
  };

  // WHEN SUBMENU ITEM IS CLICKED, NEED TO RUN SideBarToggle or showSideBar?



  return (
    //code to make sidebar hide is https://stackoverflow.com/questions/66626487/hiding-sidebar-component-on-outside-click
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
      {sidebar && <Backdrop onClick={closeDrawerHandler} />}
        <Nav>
        <NavContainer>
        
          <NavIcon to='#' onClick={test} style={{ color: 'white', fontSize: '2vw', textDecoration: 'none'}}>
            <FaIcons.FaBars />
            <div style = {{ fontSize: '1.6vw' }}>Menu</div>
          </NavIcon>
          </NavContainer>
          <Header2 />
        </Nav>
  
        <SidebarNav sidebar={sidebar}>
          {/* if target has no children (ie. About Us and Book Your Trip), then do not run test function */}
          
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
