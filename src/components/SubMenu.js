import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "@fontsource/roboto"; // Defaults to weight 400.
import SideBarToggle from './SideBarToggle';


const SidebarLink = styled(Link)`
  font-family: "Roboto";
  background: #1a1111;
  font-weight: 100;
  padding: 1vw
  padding-bottom: 25px;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: flex-start;
  align-items: left;
  list-style: none;
  height: 4vh;
  text-decoration: none;
  font-size: 15px;
  @media (max-width: 802px) {
    font-size: 15px;
    background: #1a1111;
  }
  

  &:hover {
    color: grey;
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
  background: #1a1111;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #f5f5f5;
  font-size: 15px;
  text-decoration: none;
  @media (max-width: 802px) {
    background: #1a1111;
  }

  &:hover {
    color: grey;
    cursor: pointer;
  }
`;

const SubNav = styled.nav`
font-family: "Roboto";
display: flex;
flex-direction: column;
padding-bottom: 5px;
padding-left: 20px;
padding-right: 20px;
`

const Hr = styled.hr`
    height: .5px;
    width: 95%;
    color: grey;
    margin-top: 1.1vh;


    @media (max-width: 802px) {
        height: .1px;
    }

    @media (min-width: 802px) {
      display: none;
    }
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
      {/* if it has a subNav do NOT link to path */}
      <SidebarLink to={item.path} onClick={() => {
        openSubNav(item.index);
        setSubnav(!subnav);
        console.log('follow link to' + item.path);
      }}>

        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
          <Hr />
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
              SideBarToggle();
              console.log(subnav);
              console.log(subNavIndex);
              console.log(item.followLink)
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
