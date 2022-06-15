import React from 'react'
import styled from 'styled-components'
import { Crew } from '../components/CrewInfo';

const Wrapper = styled.div`
width: 100%;
height: 50vh;
background: green;
display: flex;
flex-direction: row;

`

const Card = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
border: 1px: solid: black;
height: 80%;
padding: 10px;

`

const Header = styled.div`
display: flex;
border: 1px solid black;
margin: 1vw;
align-content: center;
height: 10%;
`
const ImageDiv = styled.div`
display: flex;
border: 1px solid black;
margin: 1vw;
align-content: center;
height: 40%;
`
const NameDiv = styled.div`
display: flex;
border: 1px solid black;
margin: 1vw;
align-content: center;
height: 10%;
`
const DescriptionDiv = styled.div`
display: flex;
border: 1px solid black;
margin: 1vw;
align-content: center;
height: 30%;
`

const DisplayCard = (props) => {
    return (

        <Wrapper>
            <DisplayCard />
            <div>NAMEY {props.name}</div>
            <div>Role {props.role}</div>

            {/* 
            <Card >
                <ImageDiv> Image Here </ImageDiv>
                <NameDiv> {props.name} </NameDiv>
                <NameDiv> {props.role} </NameDiv>
                <DescriptionDiv>{props.description}</DescriptionDiv>
            </Card>
            <Card>
                <ImageDiv> Image Here </ImageDiv>
                <NameDiv> Name Here </NameDiv>
                <DescriptionDiv>Description Here</DescriptionDiv>
            </Card>
            <Card>
                <ImageDiv> Image Here </ImageDiv>
                <NameDiv> Name Here </NameDiv>
                <DescriptionDiv>Description Here</DescriptionDiv>
            </Card>
            <Card>
                <ImageDiv> Image Here </ImageDiv>
                <NameDiv> Name Here </NameDiv>
                <DescriptionDiv>Description Here</DescriptionDiv>
            </Card> */}
        </Wrapper>
    )
}

export default DisplayCard