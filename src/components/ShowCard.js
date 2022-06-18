import React from 'react'
// download ms win 10 instalaton tool from ms, 

import styled from 'styled-components'
import { Crew } from '../components/CrewInfo';

const WrapperWrap = styled.div`
width: 100%;
height: 60vh;
float: left;
`
const Wrapper = styled.div`
width: auto;
height: 100%;
display: flex;
flex-direction: row;
float: left;
`

const Card = styled.div`
background: #9FDDA8;
border: 1px solid black;
margin: 1vw;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px: solid: black;
border-radius: 7px;
width: 225px;
height: 380px;
padding: 5px;
`

const Header = styled.div`
background: #9FDDA8;
display: flex;
border: 1px solid black;
margin: 1vw;
align-content: center;
height: 10%;
`
const ImageDiv = styled.div`
background: white;
display: flex;
padding-top: 7px;
justify-content: center;
border: 1px solid black;
border-radius: 7px;
margin: .3vw;
align-content: center;
height: 60%;
`
const NameDiv = styled.div`
background: white;
display: flex;
padding-top: .5vh;
justify-content: center;
border: 1px solid black;
border-radius: 7px;
margin: .3vw;
align-content: center;
height: 8%;
`
const DescriptionDiv = styled.div`
background: white;
display: flex;
padding-top: 7px;
border: 1px solid black;
border-radius: 7px;
justify-content: center;
margin: .3vw;
overflow-y: scroll;
padding: 3px;
align-content: center;
height: 30%;
`


const ShowCard = (props) => {


    return (
        <WrapperWrap>
            <Wrapper>
                <Card>
                    <NameDiv> {props.name} </NameDiv>
                    <ImageDiv> <img style={{ height: '200px', borderRadius: '10px' }}src = {props.url} alt = {`image of ` + props.name} /> </ImageDiv>

                    <DescriptionDiv> {props.description}</DescriptionDiv>
                </Card>
            </Wrapper>
        </WrapperWrap>
    )
}

export default ShowCard