import React from "react";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Header, TextContainer } from '../ComponentStyles'

const RiskAssesments = () => {
  return (
    <Container
    style={{
      height: '100vh',
      justifyContent: 'flex-start',
    }}>
      <Header>Risk Assesments</Header>
      <TextContainer>We take your Health and Safety Very seriously.</TextContainer>
      <TextContainer>It’s important to ensure that our risk assessments remain valid and up-to-date as circumstances may change over time.  When 
        a task, or legislation changes, or improvements are made to the boat, the risk assesments are reviewed and updated if required.  It is very 
        important that we monitor any risks that may be present so we can put measures into place to control these risks. 
      </TextContainer>
      <br />
      <TextContainer>You can download the latest risk assesments on the link below</TextContainer>

      <a
            href="https://adejord.co.uk/uploads/docs/Risk-Assessment.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Current Risk Assessment here
          </a>
    </Container>
  );
};

export default RiskAssesments
