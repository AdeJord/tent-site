import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import TENTlogo from "../images/TENTlogo.PNG";
import Mainnav from "./Mainnav";
import { useNavigate } from "react-router-dom";

//hex colour for TENT Logo background #9FDDA8
// hex colour for content background #EDECE4
//THIS IS THE ONE WITH THE BURGER BUTTON

const Wrapper = styled.section`
  background: #9fdda8;
  height: auto;
  color: black;
  min-height: 140px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;
  top: 0;
  left: 0;
  position: relative;
  justify-content: space-around;
`;

const TopContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between; // Keep space-between so that the title centers when the left logo is hidden
  align-items: center;
  padding: 0;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  color: #1a1111;
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  padding-left: 11vw;
  flex-direction: column;
  font-size: 3.7vw;
  text-align: center; // Ensure text is centered within the title container
  flex-grow: 1;
  justify-content: center; // Center title vertically in the container
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    height: auto;
    width: 15vw;
    max-width: 150px;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  // background: red;
  font-family: "Roboto Condensed", sans-serif;
  color: #1a1111;
  text-align: left;
  font-size: 2vw; // Start with a base size for consistency
  margin: 0 25px;
  padding: 5px;
  @media (max-width: 802px) {
    font-size: 0.9rem; // Slightly smaller font on smaller devices
  }
`;

const Hr = styled.hr`
  margin-left: 10vw;
  width: 73%;
  background-color: grey;
  // margin-top: 1rem; // Use rem for consistent scaling
`;

const MainNavWrap = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  position: relative; // Ensure it's positioned in flow
`;

const Header = () => {

  const navigate = useNavigate();

  return (
    <Wrapper>
      <TopContainer
          onClick={() => navigate('/')}>
        <TitleContainer>
          <>Truman Enterprise Narrowboat Trust </>
          <Hr />
        </TitleContainer>

        <LogoContainer>
          <img src={TENTlogo} alt="tent logo" />
        </LogoContainer>
      </TopContainer>
      <DescriptionContainer>
      Providing fully accessible narrowboat day trips on the South Staffs
      waterways
      </DescriptionContainer>
      <MainNavWrap>
        <Mainnav />
      </MainNavWrap>
    </Wrapper>
  );
};

export default Header;
