import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 1em;
  font-size: 1.5rem;
  height: 100%;
`;

const Container = styled.div`
display: flex;
flex-direction: column;
position: relative;
text-align: center;
height: 50px;
padding: 20px;
justify-content: center;
@media (min-width: 768px) {
    font-size: 2.75rem;
    padding-left: 14rem
}
}
`

const Header = () => {
    return (
        <Wrapper>
        <Container>
            Truman Enterprise Narrowboat Trust
        </Container>
        </Wrapper>
    )
}

export default Header