// Importing React, styled-components, and React Router components
import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import { Link } from "react-router-dom";
import { TextContainer, Header } from "../ComponentStyles";

// Creating styled-components with responsive styles
const Container = styled.div`
  padding-bottom: 50px;
  max-width: 85%;
  margin: 0 auto;
  height: auto;
  font-family: "Roboto", Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Section = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 8px;
    padding-bottom: 4px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Highlight = styled.span`
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const AimsAndObjectives = () => {
  return (
    <Container>
      <Header>Aims and Objectives</Header>
      <Section>
        <Title>Our Mission</Title>
        <Text>
          To provide affordable day trips on the canals for community groups and
          families with members who are elderly, disabled, have special needs or
          health issues.
        </Text>
      </Section>
      <Section>
        <Title>Connecting Urban Communities with Nature</Title>
        <Text>
          We aim to offer individuals from predominantly urban areas a chance to
          experience the serene countryside and explore the inland waterways,
          fostering a deeper connection with nature.
        </Text>
      </Section>
      <Section>
        <Title>
          <StyledLink to="/TrainingCourses">
            Accredited Crew Training
          </StyledLink>
        </Title>
        <Text>
          We are committed to education and skill-building by offering
          accredited crew training courses. These courses are available to our
          trust volunteers, groups of young people, group leaders, and members
          of the public, ensuring safety and professionalism on every trip.
        </Text>
      </Section>
      <Section>
        <Title>
          <StyledLink to="/volunteers">Inclusive Volunteering</StyledLink>
        </Title>
        <Text>
          We believe in the power of community and inclusivity. Our organization
          provides volunteering opportunities for people from all walks of life,
          promoting a sense of purpose and community involvement.
        </Text>
        <Text></Text>
      </Section>
    </Container>
  );
};

export default AimsAndObjectives;
