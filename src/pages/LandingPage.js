import React from "react";
import styled from "styled-components";
import contact_river from '../images/contact_river.jpg';

const Container = styled.section`
display: flex;
flex-direction: column;
height: 75vh;
width: auto;
align-items: center;
padding: 0px;
overflow-y: scroll;
@media (min-width: 768px) {
  height:65vh;
} `

const ImgContainer = styled.div`
width: 100%;
height: 70vh;
`


const LandingPage = () => {
  return (
    <Container>
      <ImgContainer>
        <img src={contact_river} alt='Nice river Pic' />
      </ImgContainer>
    </Container>
  );
};

export default LandingPage;
