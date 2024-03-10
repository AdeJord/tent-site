import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import '../App.css';
import '../map.css';
import { Crew } from "../components/CrewInfo";
// import Paper from '@mui/material/Paper';
// import TinderCard from 'react-tinder-card';
// import TiinderCard from "../cards/TiinderCard";
// import Cards, { Card } from 'react-swipe-card';
// import CrewMemberCard from "../cards/CrewMemberCard";
import ShowCard from "../components/ShowCard"


const Container = styled.div`
font-family: "Roboto";
display: flex;
flex-direction: row;
height: auto;
width: auto;
padding-top: 1vw;
padding: 2vw;
min-height: 75.5vh;
overflow: scroll;
align-items: center;
@media (max-width: 802px) {
  flex-direction: column;
}
`

const TestDiv = styled.div`
width: 100%;
height: 68vh;
margin: 10px
`

const WrapperWrap = styled.div`
width: 100%;
height: 60vh;
float: left;
padding-top: 3vh;
`
const Wrapper = styled.div`
width: auto;
height: 100%;
display: flex;
flex-direction: row;
float: left;
`

const PageTitle = styled.div`
color: black;
position: absolute;
top: 30vh;
left: 40vw;
font-family: "Roboto";
text-align: center;
display: block;
width: calc (100vw - 25px);
height: 2vh;
padding-top: 4vh;
padding-bottom: 25px;
font-size: 1.6em;

@media (max-width: 802px) {
  left: 30vw;
  top: 15vh
}
`

// const crew = Crew




const MeetTheCrew = () => {

  // const onSwipe = (direction) => {
  //   console.log('You swiped: ' + direction)
  // }

  // const onCardLeftScreen = (myIdentifier) => {
  //   console.log(myIdentifier + ' left the screen')
  // }

  return (

    <div className="container">

      <TestDiv>
        {/* <PageTitle>Meet The Crew</PageTitle> */}
        <WrapperWrap>
          <Wrapper>
            <ShowCard
              name="Adrian Jordan"
              url="https://i.imgur.com/nCY4rah.jpg"
              description="Skipper, Crew Member, Website developer. Started with the trust
        around 2018 (I think) and I will add more to this later!!!..............Skipper, Crew Member, Website developer. Started with the trust
        around 2018 (I think) and I will add more to this later!!!"
            />
            <ShowCard
              name="Mariel Bishop"
              description="A bit about Mariel and what she does in the trust, and some like/dislikes  etc?"
            />
            <ShowCard
              name="Christopher Rogers"
              description="A bit about Chris and what he does in the trust, and some like/dislikes  etc?"
            />
            <ShowCard
              name="Jenny Christion"
              description="A bit about Jenny and what she does in the trust, and some like/dislikes  etc?"
            />
            <ShowCard
              name="David Leaper"
              description="A bit about David and what he does in the trust, and some like/dislikes  etc?"
            />

            <ShowCard
              name="Agata Tomaszewska"
              description="Crew Member. Started with the trust
        around 5 years ago."
            />
          </Wrapper>
        </WrapperWrap>
      </TestDiv>


    </div>
  );
};

export default MeetTheCrew;

