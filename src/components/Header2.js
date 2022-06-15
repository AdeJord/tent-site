import React from 'react'
import styled from 'styled-components'
import "@fontsource/roboto"; // Defaults to weight 400.
import TENTlogo from '../images/TENTlogo.PNG'
import Mainnav from './Mainnav';


//hex colour for TENT Logo background #9FDDA8

const Wrapper = styled.section`
  background: #9FDDA8;
  color: black;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  align-content: space-around;

  @media (max-width: 802px){
    // background: red;
  }
`

const TopContainer = styled.div`;
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
fontWeight: 400;
`

const TitleContainer = styled.div`
color: #1a1111;
font-family: roboto-condensed;
overflow: wrap;
display: flex;
flex-direction: column;
justify-content: flex-start;
font-size: 3.8vw;
position: relative;
padding-top: .5vh;
padding-left: 18vw;
width: 95%;
@media (max-width: 802px){
    padding-left: 1vw;
}
`

const LogoContainer = styled.div`
//  border: 1px solid black;
display: flex;
flex-direction: row;
justify-content: flex-end;
width: auto;
height: auto;
@media (max-width: 500px) {
    
}
`

const DescriptionContainer = styled.div`
display: flex;
flex-direction: row;
font-family: roboto-condensed;
color: #1a1111;
text-align: center;
justify-text: bottom;
font-size: 2.2vw;
margin-left: 18vw;
padding-left: 5px;

 @media (max-width: 802px) {
    // color: darkred;
    overflow: wrap;
    font-size: 2.5vw;
    margin-left: 0vw;
}
`

const Hr = styled.hr`
    height: .3vh;
    width: 95%;
    background-color: grey;
    margin-top: 2vw;
    @media (max-width: 802px) {
        height: .15vh;
    }
`

const MainNavWrap = styled.div`
font-family: "Roboto";
  width: 100%;
`;

const Header = () => {
    return (
        <Wrapper>
            <TopContainer>
                {/* <LogoContainer>
                <img style={{height: 'auto', width: '25vw' }} src={TENTlogo} alt="tent logo" />
                </LogoContainer> */}
                <TitleContainer>
                    <>Truman Enterprise Narrowboat Trust </>
                    <Hr />
                </TitleContainer>

                <LogoContainer>
                    <img style={{ height: '10vw', width: 'auto' }} src={TENTlogo} alt="tent logo" />
                </LogoContainer>
            </TopContainer>

            <DescriptionContainer>
                <>Providing fully inclusive boat trips on the Staffordshire and Worcestershire canal.</>
            </DescriptionContainer>
            <MainNavWrap>
            <Mainnav />
            </MainNavWrap>
        </Wrapper>
    )
}

export default Header