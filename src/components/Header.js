import React from 'react';
import styled from 'styled-components';
import "@fontsource/roboto"; // Defaults to weight 400.
import TENTlogo from '../images/TENTlogo.PNG';
import Mainnav from './Mainnav';

const Wrapper = styled.section`
  background: #9FDDA8;
  color: black;
  min-height: 90px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  position: fixed; // Changed from relative to fixed to keep it on top
  top: 0;
  left: 0;
  z-index: 1000; // Ensure it's above other elements
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; // Added padding
`;

const TitleContainer = styled.div`
  color: #1a1111;
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 1.7em;
  width: auto; // Changed from 95% to auto
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center; // Vertically center the logo
  width: auto; // Ensures container only takes up as much space as needed
  img {
    height: auto; // Ensures the height adjusts with width to maintain aspect ratio
    width: 8em; // Sets a fixed width for consistency
    @media (max-width: 500px) {
      width: 6em; // Smaller logo on small devices
    }
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  font-family: 'Roboto Condensed', sans-serif;
  color: #1a1111;
  text-align: center;
  font-size: 1rem; // Start with a base size for consistency
  margin: 0 25px;
  padding: 5px;
  @media (max-width: 802px) {
    font-size: 0.9rem; // Slightly smaller font on smaller devices
  }
`;

const Hr = styled.hr`
  width: 95%;
  background-color: grey;
  margin-top: 1rem; // Use rem for consistent scaling
`;

const MainNavWrap = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  position: relative; // Ensure it's positioned in flow
`;

const Header = () => {
  return (
    <Wrapper>
      <TopContainer>
        <LogoContainer>
          {/* <img src={TENTlogo} alt="TENT logo" /> */}
        </LogoContainer>
        <TitleContainer>
          Truman Enterprise Narrowboat Trust
          <Hr />
        </TitleContainer>
        <LogoContainer>
          <img src={TENTlogo} alt="TENT logo" />
        </LogoContainer>
      </TopContainer>

      <DescriptionContainer>
        Providing fully inclusive boat trips on the Staffordshire and Worcestershire canal.
      </DescriptionContainer>
      <MainNavWrap>
        <Mainnav />
      </MainNavWrap>
    </Wrapper>
  );
}

export default Header;
