import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import { Container, TextContainer, Header } from '../ComponentStyles'


const List = styled.ul`
height: auto;
padding-top: 15px;
font-family: "Roboto";
font-size: 18px;
`

const AimsAndObjectives = () => {
  return (
    <Container
    style={{
      height: '100vh',
      justifyContent: 'flex-start',
    }}>
        <Header>Aims and Objectives</Header>
        <TextContainer>
        <List>
          <li>To provide affordable day trips on the canals for community groups and families with members who are elderly, disabled, unwell or disadvantaged.</li><br />
          <li>To give an opportunity for people who are mostly from urban areas to experience the countryside and inland waterways.</li><br />
          <li>To provide accredited crew training courses for trust volunteers, groups of young people, group leaders and members of the public.</li><br />
          <li>To provide volunteering opportunities for people from all walks of life </li><br />
        </List>
        </TextContainer>
    </Container>

  );
};

export default AimsAndObjectives;
