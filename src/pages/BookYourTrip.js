import React from 'react';
import styled from "styled-components";

const Container = styled.section`
display: flex;
flex-direction: column;
height: 69vh;
align-items: center;
padding: 20px;
overflow-y: scroll;
@media (min-width: 768px) {
  height:65vh;
} `

export const BookYourTrip = () => {
  return (
    <div className = "container">
      <div className = "page-title">Big call to action</div>
      <p>A page with contact numbers for Booking, Enquiries etc, </p>
    </div>
  );
};


export const HowToPay = () => {
  return (
    <Container>
      <h1>How to pay for your trip</h1>
      <p>A page showing payment methods</p>
    </Container>
  );
};

export const HavAGo = () => {
  return (
    <Container>
      <h1>Have a go days</h1>
      <p>A big nice page showing people having fun and learning about how to handle, moor and turn around</p>
    </Container>
  );
};

export const Training = () => {
  return (
    <Container>
      <h1>Training</h1>
      <p>A page selling what training we offer</p>
    </Container>
  );
};

