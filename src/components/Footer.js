import React from 'react'
import styled from 'styled-components';
import ncbaLogo from '../images/ncbaLogo.jpg'
import iwaLogo from '../images/iwaLogo.gif'
import "@fontsource/roboto"; // Defaults to weight 400.


const Container = styled.div`
font-family: "Roboto";
background: white;
justify-content: flex-end;
width: 100%;
height: 65px;
display: flex;
align-content: center;
flex-direction: row;
bottom: 0;
left: 0;
z-index: 6;
position: fixed;
// @media (max-width: 802px) {
//   height: 15vw;
`

const Footer1 = styled.div`
background: #9FDDA8;
display: flex;
flex-direction: column;
justify-content: center;
align-content: right;
width 25%;
height: auto;
padding-top: .5vw;
border: 1px solid black;

`
const Footer2 = styled.div`
background: #9FDDA8;
font-family: "Roboto";
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
width: 50%;
border-top: 1px solid black;
border-bottom: 1px solid black;
padding: 1em;
font-size: 12px;
padding: .5em;
@media (max-width: 505px) {
  font-size: 2vw;
  padding-left: 3em;
  padding-right: 3em;
}
`
const Footer3 = styled.div`
background: #9FDDA8;
display: flex;
flex-direction: column;
justify-content: center;
align-content: right;
width 25%;
height: auto;
padding-top: .5vw;
border: 1px solid black;
`


const Footer = () => {
  return (
    <Container>
      <Footer1>
        <img src = {ncbaLogo} alt='NCBA Logo' style={{  paddingLeft: '5vw', width:'10vw', height:'5vh'}}/>
      </Footer1>
      <Footer2>
      Truman Enterprise Narrowboat Trust. Registered Charity number - 1037914
Member of the National Community Boats Association
      </Footer2>
      <Footer3>
      <img src = {iwaLogo} alt='IWA Logo' style={{ paddingLeft: '3vw', width:'12vw', height:'5vh'}} />
      </Footer3>
    </Container>
  );
};
export default Footer
