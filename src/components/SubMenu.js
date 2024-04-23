import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "@fontsource/roboto"; // Defaults to weight 400.
import SideBarToggle from './sideBarToggle';


const SidebarLink = styled(Link)`
  font-family: "Roboto";
  background: #420C0C;
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
    background: #420C0C;
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
  background: #420C0C;
  padding-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 5px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: #f5f5f5;
  font-size: 15px;
  text-decoration: none;
  @media (max-width: 802px) {
    background: #420C0C;
  }

  &:hover {
    color: grey;
    cursor: pointer;
  }
`;


// NEED TO SORT THE CHANGING OF LINK WIDTHS WHEN A DROPDOWN IS OPENED
const SubNav = styled.nav`
font-family: "Roboto";
display: flex;
flex-direction: column;
padding-bottom: 5px;
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

// WHEN SUBMENU ITEM IS CLICKED, NEED TO RUN SideBarToggle or showSideBar?

const SubMenu = ({ item, showMainNavbar, subNavIndex, openSubNav }) => {
  const [subnav, setSubnav] = useState(false);
  // console.log(JSON.stringify(item, null, 2));


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
        // console.log('follow link to' + item.path);
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
              setSubnav(!subnav); // this closes submenu ok. just need to close sidebar too?
              // console.log('SubNavIndex ' + subNavIndex);
              // console.log(item.path)
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
