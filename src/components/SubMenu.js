import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "@fontsource/roboto"; // Defaults to weight 400.

const SidebarLink = styled(Link)`
  font-family: "Roboto";
  background: black;
  font-weight: 100;
  padding: 1vw
  padding-bottom: 25px;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: flex-start;
  align-items: left;
  list-style: none;
  height: 5vh;
  text-decoration: none;
  font-size: 15px;
  @media (max-width: 802px) {
    font-size: 15px;
    background: #114709;
  }
  

  &:hover {
    background: #114709;
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

// this is that whole dropdown
const DropdownLink = styled(Link)`
font-family: "Roboto";
font-weight: 100;
  background: black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #f5f5f5;
  font-size: 15px;
  text-decoration: none;
  @media (max-width: 802px) {
    background: #114709;
  }

  &:hover {
    background: #0D380A;
    cursor: pointer;
  }
`;

const SubNav = styled.nav`
font-family: "Roboto";
display: flex;
flex-direction: column;
padding-bottom: 5px;
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
