import styled, { createGlobalStyle } from "styled-components";

// GlobalStyle to reset CSS
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body, html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`;

export const Root = styled.div`
  background-color: #eaf3e7;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  font-size: 15px;
  color: #051101;
  font-family: "Roboto, Arial, Helvetica, sans-serif";
  padding: 0;
  margin: 0;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  align-items: center;
  background-color: #eaf3e7;
  padding-top: 0px;
  padding-bottom: 50px;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;

  // @media (min-width: 768px) {
  //   min-height: 62vh;
  //   padding-bottom: 0;
  // }
`;



export const Header = styled.div`
  font-family: "Roboto";
  width: auto;
  text-align: center;
  color: #114709;
  font-size: 1.5em;
  font-weight: 400;
  padding-top: 50px;
  padding-bottom: 20px;
  background-color: #eaf3e7;

  @media (max-width: 768px) {
    font-size: 1.2em;
    padding-top: 30px;
    padding-bottom: 10px;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  display: flex;
  font-family: "Roboto";
  font-size: 1.2em;
  flex-direction: column;
  background-color: #eaf3e7;
  padding: 15px;
  padding-bottom: 10px;
  width: 80%;

  @media (max-width: 768px) {
    font-size: 1em;
    width: 90%;
    padding: 10px;
  }
`;
