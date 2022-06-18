import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.


const List = styled.ul`
height: 59vh;
padding-top: 15px;
font-family: "Roboto";
font-size: 15px;
`

const AimsAndObjectives = () => {
  return (

    <div className = "container">
        <div className = "page-title">Aims and Objectives</div>
        
        <List>
          <li>To provide affordable day trips on the canals for community groups and families with members who are elderly, disabled, unwell or disadvantaged.</li><br />
          <li>To give an opportunity for people who are mostly from urban areas to experience the countryside and inland waterways.</li><br />
          <li>To provide accredited crew training courses for trust volunteers, groups of young people, group leaders and members of the public.</li><br />
          <li>To provide volunteering opportunities for people from all walks of life </li><br />
        </List>
    </div>

  );
};

export default AimsAndObjectives;
