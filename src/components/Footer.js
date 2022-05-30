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
height: 10vh;
display: flex;
align-content: center;
flex-direction: row;
position: relative;
bottom: 0;
left: 0;

`

const Footer1 = styled.div`
background: #9FDDA8;
display: flex;
flex-direction: column;
justify-content: center;
align-content: right;
width 25%;
height: auto;
padding: 2vw;
border: 1px solid black;

`
const Footer2 = styled.div`
background: #9FDDA8;
font-family: "Roboto";
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
border-top: 1px solid black;
border-bottom: 1px solid black;
padding: 1em;
font-size: 1em;
padding: .5em;


@media (min-width: 1024) {
  font-size: 1em;
  padding-left: 2em;
  padding-right: 2em;
}

@media (max-width: 768px) {
  font-size: .6em;
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
padding: 2vw;
border: 1px solid black;

`


const Footer = () => {
  return (
    <Container>
      <Footer1>
        <img src = {ncbaLogo} alt='NCBA Logo' style={{  paddingLeft: '5vw', width:'10vw', height:'8vh'}}/>
      </Footer1>
      <Footer2>
      Truman Enterprise Narrowboat Trust. Registered Charity number - 1037914
Member of the National Community Boats Association
      </Footer2>
      <Footer3>
      <img src = {iwaLogo} alt='IWA Logo' style={{ paddingLeft: '3vw', width:'12vw', height:'6vh'}} />
      </Footer3>
    </Container>
  );
};
export default Footer
