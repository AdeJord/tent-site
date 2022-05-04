import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "@fontsource/roboto"; // Defaults to weight 400.

const SidebarLink = styled(Link)`
font-family: "Roboto";
  display: flex;
  flex-direction: row;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 14px;
  

  &:hover {
    background: #0D380A;
    border-left: 10px solid ##0D380A;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
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
font-family: "Roboto";
  background: #114709;
  height: 2vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  max-width: 150px;
  color: #f5f5f5;
  font-size: 13px;

  &:hover {
    background: #0D380A;
    cursor: pointer;
  }
`;

const SubNav = styled.nav`
font-family: "Roboto";
display: flex;
flex-direction: column;
`

const SubMenu = ({ item, showMainNavbar, subNavIndex, openSubNav }) => {
  const [subnav, setSubnav] = useState(false);
  //console.log(JSON.stringify(item, null, 2));


  useEffect(() => {
    if (item.index !== subNavIndex) {
      setSubnav(false);
    }
  }, [subNavIndex]);

  return (
    <SubNav>
      <SidebarLink to={item.path} onClick={() => {
        openSubNav(item.index);
        setSubnav(!subnav);
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
      {subnav && subNavIndex === item.index &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={() => {
              setSubnav(false);
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
