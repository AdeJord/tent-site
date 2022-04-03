import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
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
  background: #15171c;
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

const MainNav = styled.nav`
background: #15171c;
width: 100vw;
height: 10vh;
display: flex;
flex-direction: row;
justify-content: space-around;;
position: fixed;
z-index: 10;
display: none;
@media (min-width: 768px) {
  display: flex;
}
`;

const MainNavChildren = styled.nav`
display: flex;
flex-direction: column;
`

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [MainNavbar, setMainNavbar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showMainNavbar = () => setMainNavbar(!MainNavbar);
  //console.log({sidebar})

  return (
    //code to make sidebar hide is https://stackoverflow.com/questions/66626487/hiding-sidebar-component-on-outside-click
<>
    <IconContext.Provider value={{ color: '#fff' }}>
         <Nav>
          <NavIcon to='#' onClick={showSidebar}>
            <FaIcons.FaBars />
          </NavIcon>
          <div style={{fontSize: '2.5em', paddingLeft: '40px'}}>Truman Enterprise Narrowboat Trust</div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#' onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} closeParent={showSidebar} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        <MainNavChildren>
        <MainNav MainNavbar={MainNavbar}>
        {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} closeParent={showMainNavbar} />;
            })}
            </MainNav>
            </MainNavChildren>
        
      </IconContext.Provider>
      </>
//</div>
  );
};

export default Sidebar;
