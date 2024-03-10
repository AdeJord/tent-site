import React from "react";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, TextContainer, Header } from '../ComponentStyles'


const TheEnterprise = () => {
  return (
    <Container
    style={{
      height: '100vh',
      justifyContent: 'flex-start',
    }}>
      <Header>The Enterprise</Header>
      <p style={{ border: 'dotted black 1px', height: '100px', width: '90vw', textAlign: 'center', color: 'gray'}}>Image of the boat here</p>
      <TextContainer>
        The Enterprise is a 70ft canal boat with a ramp and wheelchair lift,
        seating for up to 12 people, and large front deck with seating, a small
        kitchen, central heating, toilet and picture windows allowing for a full
        view of the surroundings. We operate trips from Hatherton Marina to
        Coven (The Fox and Anchor or the Three Hammers golf complex) or to
        Autherley Junction for a slightly longer trip. Food can either be
        brought yourselves, we can get fish and chips on the way, or you can
        stop at the pub or the golf complex for a full meal with drinks.
        <TextContainer>
          We aim to provide affordable day trips on the canals for community
          groups and families with members who are elderly, disabled, unwell or
          disadvantaged.
        </TextContainer>
        <br />

        Our address is

        <TextContainer>
        Hatherton Marina, Queens Road, Calf Heath, Wolverhampton, WV107DT
        </TextContainer>
        <TextContainer>
          To download a printable leaflet about day trips on board Enterprise{" "}
          <Link to="/downloads/BoatLeaflet.pdf" target="_blank" download>
            HERE
          </Link>
        </TextContainer>
      </TextContainer>
    </Container>
  );
};

export default TheEnterprise;
