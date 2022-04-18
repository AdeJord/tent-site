import React from 'react';
import styled from "styled-components";

const Container = styled.section`
display: flex;
flex-direction: column;
height: 75vh;
align-items: center;
padding: 20px;
overflow-y: scroll;
@media (min-width: 768px) {
  height:65vh;
} `

export const BookYourTrip = () => {
  return (
    <Container>
      <h1>Book your trip</h1>
    </Container>
  );
};

export const HowMuch = () => {
  return (
    <Container>
      <h1>How much does it cost</h1>
    </Container>
  );
};

export const HowToPay = () => {
  return (
    <Container>
      <h1>How to pay for your trip</h1>
    </Container>
  );
};

export const HavAGo = () => {
  return (
    <Container>
      <h1>Have a go days</h1>
    </Container>
  );
};

export const Training = () => {
  return (
    <Container>
      <h1>Training</h1>
    </Container>
  );
};

export const TermsAndCond = () => {
  return (
    <Container>
      <h1>Terms and conditions</h1>
    </Container>
  );
};
