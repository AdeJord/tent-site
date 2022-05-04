import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.


const Container = styled.div`
font-family: "Roboto";
display: flex;
flex-direction: row;
height: 90vh;
width: 100vw;
align-items: center;
@media (max-width: 802px) {
  height: 65vh;
  flex-direction: column;
}
`

const TextDiv = styled.div`
display: flex;
flex-direction: column;
align-content: center;
text-align: center;
height: 100%;
width: 50%;
background: red;
display: flex;
padding: 10px;
@media (max-width: 802px) {
  width: 90vw;
}

`

const MapDiv = styled.div`
display: flex;
flex-direction: column;
align-content: center;
text-align: center;
height: 100%;
width: 50%;
background: blue;
display: flex;
padding: 10px;
flex-direction: column;
@media (max-width: 802px) {
  width: 90vw;
  padding: 30px
}
`

const ContactUs = () => {
  return (
    <Container>
      <TextDiv><h1>Contact Us</h1></TextDiv>
      <MapDiv><p>A page with contact numbers for Booking, Enquiries etc, </p></MapDiv>


    </Container>
  );
};

export default ContactUs;
