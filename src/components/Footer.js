import React from 'react'
import styled from 'styled-components';
import ncbaLogo from '../images/ncbaLogo.jpg'
import iwaLogo from '../images/iwaLogo.gif'


const Container = styled.div`
height: 100px;
display: flex;
flex-direction: row;
position: relative;
max-width: 100%;
max-height: 100%;
position:relative;
bottom:0;
`

const Footer1 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width 33%;
padding-top: .5em;
border: 1px solid black;
@media (min-width: 768px) {
  padding-left: 3em;
  padding-right: 3em;
}

`
const Footer2 = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width 33%;
border-top: 1px solid black;
border-bottom: 1px solid black;
padding: 1em;
font-size: .65em;
@media (min-width: 768px) {
  font-size: 1.1em;
}

`
const Footer3 = styled.div`
display: flex;
flex-direction: row;
padding-top: 1em;
justify-content: center;
width 33%;
border: 1px solid black;
@media (min-width: 768px) {
  padding-left: 3em;
  padding-right: 3em;
}

`


const Footer = () => {
  return (
    <Container>
      <Footer1>
        <img src = {ncbaLogo} alt='NCBA Logo' style={{width:'50%', height:'80%'}}/>
      </Footer1>
      <Footer2>
      Truman Enterprise Narrowboat Trust. Registered Charity number - 1037914
Member of the National Community Boats Association
      </Footer2>
      <Footer3>
      <img src = {iwaLogo} alt='IWA Logo' style={{width:'60%', height:'80%'}} />
      </Footer3>
    </Container>
  );
};
export default Footer
