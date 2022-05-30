import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.


const Container = styled.section`
display: flex;
flex-direction: column;
width: auto;
align-items: center;
padding-bottom: 100px;
overflow-y: scroll;
height: auto;
`

const PageTitle = styled.div`
font-family: "Roboto";
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
padding-top: 30px;
padding-bottom: 30px;
height: 4vh;
font-size: 1.5em;
@media (min-width: 768px) {
  padding-bottom: 60px;
};
@media (min-width: 386) {
  font-size: .11em;
}
`

const List = styled.ul`
font-family: "Roboto";
font-size: 20px;
`

const AimsAndObjectives = () => {
  return (

    <Container>
        <PageTitle>Aims and Objectives</PageTitle>
        
        <List>
          <li>To provide affordable day trips on the canals for community groups and families with members who are elderly, disabled, unwell or disadvantaged.</li><br />
          <li>To give an opportunity for people who are mostly from urban areas to experience the countryside and inland waterways.</li><br />
          <li>To provide accredited crew training courses for trust volunteers, groups of young people, group leaders and members of the public.</li><br />
          <li>To provide volunteering opportunities for people from all walks of life </li><br />
        </List>
    </Container>

  );
};

export default AimsAndObjectives;
