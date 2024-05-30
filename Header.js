import React from 'react'
import styled from 'styled-components'
import "@fontsource/roboto"; // Defaults to weight 400.


const Wrapper = styled.section`
  background: #114709;
  height: 26vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding-top: 1vh;
  position: relative;
  align-content: space-around;
`

const Container = styled.div`
font-family: "Roboto";
overflow: wrap;
display: flex;
flex-direction: column;
justify-items: center;
font-size: 4vw;
position: relative;
text-align: center;
height: auto;
@media (min-width: 618px) {
    font-size: 4vw;}
`

const LowerContainer = styled.div`
font-family: "Roboto";
margin-top: 1vh;
display: flex;
flex-direction: column;
position: relative;
text-align: center;
height: auto;
justify-text: bottom;
font-size: 1.5vw;
@media (max-width: 618px) {
    font-size: 2.5vw;
}
`

const Header = () => {
    return (
        <Wrapper>
            <Container>
                Truman Enterprise Narrowboat Trusts

                <LowerContainer  style={{fontWeight: 200}}>
                    Providing fully inclusive boat trips on the Staffs and Worcs canal
                </LowerContainer>
            </Container>

        </Wrapper>
    )
}

export default Header