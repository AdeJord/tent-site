import styled from "styled-components";

//this container seems gooooooood! ;-)
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: auto;
  width: auto;
  align-items: center;
  background: #EDECE4;
  padding-top: 0px;
  padding-bottom: 50px;
  // @media (min-width: 768px) {
  //   height: 62vh;
  // }
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
flex-direction: column;
// background: gray;
padding: 15px;
padding-bottom: 10px;
`