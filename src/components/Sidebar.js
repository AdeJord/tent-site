import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Header from './Header';

const Nav = styled.div`
  background: #114709;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-size: .75rem;
`;

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

const SidebarNav = styled.nav`
  background: #114709;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 250ms;
  z-index: 10;
  @media (min-width: 768px) {
    width: 100vh;
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
          <NavIcon to='#' onClick={test}>
            <FaIcons.FaBars />
          </NavIcon>
            <Header />
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
