import React from  'react';
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

export const AboutUs = () => {
    return (
        <Container>
            <h1>About Us</h1>
        </Container>
    );
};

export const AboutTheTrust = () => {
    return (
    <Container>
        <h1>About The Trust</h1>
    </Container>
    );
};

export const Volunteers = () => {
    return(
        <Container>
        <h1>Volunteers</h1>
        </Container>
    );
};

export const BoatBrochure = () => {
    return (
        <Container>
            <h1>Boat Brochure</h1>
        </Container>
    );
};

export const DetailsAndDiagrams = () => {
    return (
    <Container>
        <h1>Details and diagrams</h1>
    </Container>
    );
};

export const AimsAndObjectives = () => {
    return (
        <Container>
            <h1>Aims and Objectives</h1>
        </Container>
    );
};

export const OurHistory = () => {
    return (
        <Container>
            <h1>Our History</h1>
        </Container>
    );
};

export const MeetTheCrew = () => {
    return (
        <Container>
            <h1> Meet the crew</h1>
        </Container>
    );
};

export const RiskAssesments = () => {
    return (
        <Container>
            <h1>Risk Assesments</h1>
        </Container>
    );
};

export const UsefulLinks = () => {
    return (
        <Container>
            <h1>Useful Links</h1>
        </Container>
    )
}