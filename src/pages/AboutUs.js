import React from  'react';
import styled from "styled-components";
import '../App.css';

const Container = styled.section`
display: flex;
flex-direction: column;
height: 69vh;
align-items: center;
padding: 20px;
@media (min-width: 768px) {
  height:65vh;
} `

export const AboutUs = () => {
    return (
        <Container>
            <h1>About Us</h1>
            <p>This will not be a page. It will be an index for the submenus</p>
        </Container>
    );
};

export const AboutTheTrust = () => {
    return (
    <Container>
        <h1>About The Trust</h1>
        <p> This will contain a description of what we offer with some nice images</p>
    </Container>
    );
};

export const TheEnterprise = () => {
    return (
        <Container>
            <h1>The Enterprise</h1>
            <p>Lots of pics and description of Enterprise</p>
        </Container>
    );
};

export const DetailsAndDiagrams = () => {
    return (
    <Container>
        <h1>Details and diagrams</h1>
        <p>Could do with a better pic of the boat plan, unfortunately I dont have time to make a visual model, so if anyone has
            a good representation of the plan, then that would be great.
        </p>
    </Container>
    );
};

export const AimsAndObjectives = () => {
    return (
        <Container>
            <h1>Aims and Objectives</h1>
            <p>Here we should show what we do, why we do it, and what we aim to do</p>
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
            <p>I'll try and do a scrolling gallery of all the volunteers, so I will need everyones best pic, and maybe a little bit about yourself, eg, why do you
                work with the trust? What have you gained from working with the trust? What do you enjoy about working with the trust? What attracted you to the trust? etc..
            
            </p>
        </Container>
    );
};

export const RiskAssesments = () => {
    return (
        <Container>
            <h1>Risk Assesments</h1>
            <p>Copies of all Risk Assesments</p>
        </Container>
    );
};

export const UsefulLinks = () => {
    return (
        <Container>
            <h1>Useful Links</h1>
            <p>A list of links to everyone involved, and associated with TENT, </p>
        </Container>
    )
}