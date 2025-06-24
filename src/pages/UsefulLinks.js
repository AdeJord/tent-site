import React from "react";
import styled from "styled-components";
import '../App.css'
import "@fontsource/roboto"; // Defaults to weight 400.
import { Container, Header } from '../ComponentStyles'


const List = styled.ul`
height: 59vh;
padding-top: 15px;
font-family: "Roboto";
font-size: 15px;
`

const UsefulLinks = () => {
  return (

    <Container
    style={{
      height: '100vh',
      justifyContent: 'flex-start',
    }}>
        <Header>Useful Links</Header>
        
        <List>
        <a href="http://www.national-cba.co.uk/" target="_blank" rel="noreferrer"><li>National Community Boats Association</li></a>
        <a href="http://canalrivertrust.org.uk/" target="_blank" rel="noreferrer"><li>Canal & River Trust</li></a>
        <a href="http://www.waterways.org.uk/" target="_blank" rel="noreferrer"><li>The Inland Waterways Association</li></a>
        <a href="http://www.bcn-society.co.uk/" target="_blank" rel="noreferrer"><li>Birmingham Canal Navigations Society</li></a>
        <a href="http://www.shropshireunion.org.uk/" target="_blank" rel="noreferrer"><li>The Shropshire Union Canal Society</li></a>
        <a href="http://www.lhcrt.org.uk/" target="_blank" rel="noreferrer"><li>Lichfield & Hatherton Canals Restoration Trust</li></a>
        <a href="http://www.vintageinn.co.uk/content/vintage-inn/en/restaurants/midlands/thefoxandanchorcrossgreen" target="_blank" rel="noreferrer"><li>The Anchor Pub at Cross Green</li></a>
        <a href="http://hathertonmarina.co.uk/" target="_blank" rel="noreferrer"><li>Hatherton Marina</li></a>
        <a href="http://www.swcanalsociety.co.uk/" target="_blank" rel="noreferrer"><li>Staffordshire & Worcestershire Canal Society</li></a>
        </List>
    </Container>

  );
};

export default UsefulLinks;
