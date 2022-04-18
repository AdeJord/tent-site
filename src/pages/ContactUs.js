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
}
`

const ContactUs = () => {
  return (
    <Container>
    <div className="messages">
      <h1>Contact Us</h1>
    </div>
    </Container>
  );
};

export default ContactUs;
