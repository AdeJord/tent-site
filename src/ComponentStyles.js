import styled from "styled-components";

//this container seems gooooooood! ;-)
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #EDECE4;
  padding-top: 0px;
  padding-bottom: 50px;
  overflow: auto;
  width: 100%; // Ensuring the container takes full width of its parent
  min-height: 100vh; // Minimum height to ensure it takes at least the full viewport height

  @media (min-width: 768px) {
    min-height: 62vh; // Adjusted to minimum height for larger screens
  }
`;

export const Header = styled.div`
font-family: "Roboto";
width: auto;
text-align: center;
color: #114709;
font-size: 1.5em;
font-weight: 400;
padding-top: 30px;
padding-bottom: 20px
`

export const TextContainer = styled.div`
text-align: left;
display: flex;
font-family: "Roboto";
font-size: 1.2em;
flex-direction: column;
// background: gray;
padding: 15px;
padding-bottom: 10px;
`