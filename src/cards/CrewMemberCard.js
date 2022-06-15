import React from 'react'
import styled from 'styled-components'
import { Crew } from '../components/CrewInfo';
import DisplayCard from '../assets/DisplayCard'; // Crashes the app

const WrapperWrap = styled.div`
width: 100%;
height: 60vh;
overflow-x: scroll;
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
width: 250px;
height: 80%;
margin: 20px;
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
background: #edece4;
display: flex;
padding-top: 7px;
justify-content: center;
border: 1px solid black;
border-radius: 7px;
margin: .3vw;
align-content: center;
height: 40%;
`
const NameDiv = styled.div`
background: #edece4;
display: flex;
padding-top: 7px;
justify-content: center;
border: 1px solid black;
border-radius: 7px;
margin: .3vw;
align-content: center;
height: 3vh;
`
const DescriptionDiv = styled.div`
background: #edece4;
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

const CrewMemberCard = () => {


  return (
    <WrapperWrap>
      <Wrapper>
        {/* <DisplayCard name = "Ade" role="Skipper/Crew Member etc " /> */}
        <Card>
          <ImageDiv> Photo of Ade </ImageDiv>
          <NameDiv> Adrian Jordan </NameDiv>
          <DescriptionDiv>Getting tired today, went to cosford airshow and seen some great planes. Had a bit of food with Niel, Romea, Fran and everyone
            Getting tired today, went to cosford airshow and seen some great planes. Had a bit of food with Niel, Romea, Fran and everyone
            Getting tired today, went to cosford airshow and seen some great planes. Had a bit of food with Niel, Romea, Fran and everyone
            Getting tired today, went to cosford airshow and seen some great planes. Had a bit of food with Niel, Romea, Fran and everyone
          </DescriptionDiv>
        </Card>
        <Card>
          <ImageDiv> Image Here </ImageDiv>
          <NameDiv> Agata Tomaszewska </NameDiv>
          <DescriptionDiv>Description Here</DescriptionDiv>
        </Card>
        <Card>
          <ImageDiv> Image Here </ImageDiv>
          <NameDiv> Mariel Bishop </NameDiv>
          <DescriptionDiv>Description Here</DescriptionDiv>
        </Card>
        <Card>
          <ImageDiv> Image Heres </ImageDiv>
          <NameDiv> Christopher Roger </NameDiv>
          <DescriptionDiv>Description Here</DescriptionDiv>
        </Card>
        <Card>
          <ImageDiv> Image Here </ImageDiv>
          <NameDiv> Mariel Bishop </NameDiv>
          <DescriptionDiv>Description Here</DescriptionDiv>
        </Card>
        <Card>
          <ImageDiv> Image Here </ImageDiv>
          <NameDiv> Jenny Christian </NameDiv>
          <DescriptionDiv>Description Here</DescriptionDiv>
        </Card>
      </Wrapper>
    </WrapperWrap>

  )
}

export default CrewMemberCard