import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import showSideBar from './Sidebar'

const SidebarLink = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 10px solid ##0D380A;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 50px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #0D380A;
    cursor: pointer;
  }
`;

const SubNav = styled.nav`
display: flex;
flex-direction: column;
`

const SubMenu = ({ item, showMainNavbar }) => {
  const [subnav, setSubnav] = useState(false);

//DO I NEED TO MAKE A closeChild FUNCTION?

  return (
    <SubNav>
      <SidebarLink to={item.path} onClick={() => {
        setSubnav(!subnav)
        if (item?.closeMenu) {
        }
      }}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={() => {
              setSubnav(false);
              console.log('sidebar close?')
            }}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </SubNav>
  );
};

export default SubMenu;
