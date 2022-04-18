import React from "react";
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


const LandingPage = () => {
  return (
    <Container>
    <div className="reports">
      <h1>LandingPage</h1>
    </div>
    </Container>
  );
};

export default LandingPage;
