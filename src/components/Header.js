import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #11632c;
  width: 100vw;
  height: 100%;
  padding: 25px
`;

const Container = styled.div`
font-family: 'Roboto', sans-serif;
color: #6e0e0e;
display: flex;
flex-direction: column;
font-size: 1.5rem;
position: relative;
text-align: center;
height: 50px;
padding-bottom: 50px;
padding-top: 25px;
justify-content: center;
@media (min-width: 768px) {
    font-size: 2.75rem;
}
}
`

const Header = () => {
    return (
        <Wrapper>
            <Container>
                Truman Enterprise Narrowboat Trust
            </Container>
            <hr />
        </Wrapper>
    )
}

export default Header