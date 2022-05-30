import React from 'react'
import styled from 'styled-components'
import "@fontsource/roboto"; // Defaults to weight 400.


const Wrapper = styled.section`
  background: #114709;
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 2vh;
  position: sticky;
  align-content: space-around;
`

const Container = styled.div`
font-family: "Roboto";
overflow: wrap;
display: flex;
flex-direction: column;
justify-items: center;
font-size: 2em;
position: relative;
text-align: center;

@media (max-width: 680px) {
    font-size: 20px; 
}
`

const LowerContainer = styled.div`
font-family: "Roboto";
margin-top: 1vh;
font-weight: 100;
display: flex;
flex-direction: column;
position: relative;
text-align: center;
height: auto;
justify-text: bottom;
font-size: .6em;
`

const Header = () => {
    return (
        <Wrapper>
            <Container style={{fontWeight: 200}}>
                Truman Enterprise Narrowboat Trust

                <LowerContainer  style={{fontWeight: 200}}>
                    Providing fully inclusive boat trips on the Staffs and Worcs canal
                </LowerContainer>
            </Container>

        </Wrapper>
    )
}

export default Header