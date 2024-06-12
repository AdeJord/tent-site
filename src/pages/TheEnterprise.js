import React from "react";
import styled from "styled-components";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, TextContainer, Header } from "../ComponentStyles";

const TheEnterprise = () => {
  return (
    <Container
      style={{
        height: "100vh",
        justifyContent: "flex-start",
        // padding: '20px',
      }}
    >
      <Header>THE ENTERPRISE</Header>
      <p
        style={{
          border: "dotted black 1px",
          height: "100px",
          width: "90vw",
          textAlign: "center",
          color: "gray",
        }}
      >
        Image of the boat here
      </p>
      <TextContainer
        style={{
          padding: "50px",
          paddingBottom: "80px",
        }}
      >
        Welcome aboard the Enterprise, a 70ft narrowbeam canal boat designed for
        accessibility and enjoyment. With a ramp and wheelchair lift, we can
        accommodate up to 12 passengers, including 2 wheelchairs. The boat
        features a large front deck with ample seating, a small kitchen equipped
        with a hob, cutlery, plates, and a central heating system. Passengers
        can make use of the kitchen to prepare free tea, coffee, and soft drinks
        provided onboard. The toilet has a door for privacy, along with a railed
        curtain that allows for extra space to accommodate wheelchairs.
        <br />
        <br />
        Our trips depart from Hatherton Marina, offering delightful journeys to
        Coven, where you can visit The Fox and Anchor pub or the Three Hammers
        Golf Complex. For a slightly longer adventure, cruise to Autherley
        Junction. Dining options are flexible to suit your preferences. You can
        bring your own food, enjoy fish and chips along the way, or stop at the
        pub or golf complex for a full meal with drinks. Experience a unique and
        accessible journey with us on the Enterprise!
        <TextContainer>
          "We aim to provide affordable day trips on the canals for community
          groups and families with members who are elderly, disabled, unwell or
          disadvantaged."
        </TextContainer>
        <br />
        <TextContainer>
          Our address is Hatherton Marina, Queens Road, Calf Heath,
          Wolverhampton, WV107DT
        </TextContainer>
        <TextContainer>
          Download a copy of our current insurance certificate
          <a
            href="https://adejord.co.uk/uploads/docs/Insurance-Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            HERE
          </a>
        </TextContainer>
        <TextContainer>
          Download a copy of our current Boat Brochure
          <a
            href="https://adejord.co.uk/uploads/docs/Boat-Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            HERE
          </a>
        </TextContainer>
      </TextContainer>
    </Container>
  );
};

export default TheEnterprise;
