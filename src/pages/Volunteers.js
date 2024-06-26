import React from "react";
import styled from "styled-components";
import '../App.css'
import Gerry from '../images/Gerry.jpg'
import "@fontsource/roboto"; // Defaults to weight 400.
import { Container, Header, TextContainer, Root } from "../ComponentStyles";


const TopDiv = styled.div`
  display: flex;
  background: #EDECE4;
  width: 80vw;
  flex-direction: row;
  align-content: center;

  @media (max-width: 1024px) {
    width: 90vw;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const TopDivLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eaf3e7;
  width: 100%;
  align-content: center;
  padding: 3vw;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 5vw;
  }
`;

const LowerLeftTopDiv = styled.div`
  padding-top: 35px;
  display: flex;
  background-color: #eaf3e7;
  flex-direction: column;
  text-align: center;
  width: 40vw;

  @media (max-width: 1024px) {
    width: 50vw;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const TopDivRight = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  background-color: #eaf3e7;
  align-content: center;
  padding-left: 9vw;

  @media (max-width: 1024px) {
    width: 100%;
    padding-left: 5vw;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
  }
`;

const Section = styled.div`
  width: 100%;
  overflow-wrap: break-word;
  background-color: #eaf3e7;
  align-content: center;

  @media (max-width: 768px) {
    padding: 0 2vw;
  }
`;


// const Image = styled.div`
// width: 100%;
// height: auto
// `

const Volunteers = () => {
    return (
        <Root>
            <Container>
                <Header>Volunteers</Header>
                <TextContainer>The Trust is run completely by volunteers</TextContainer>
                <hr />
                <TopDiv >
                    <TopDivLeft
                    
                    style={{
                        width: '90%'
                    
                    }}>
                        <div>
                            <p style={{ paddingBottom: '3vh' }}>
                                "We do this because we have a passion for giving absolutely everyone the opportunity to
                                enjoy the ambience of the british canal system"
                            </p>
                        </div>
                        <Section>
                            <h3 style={{ paddingBottom: '20px', paddingLeft: '20px' }}>Our volunteers ...</h3>
                            <ul>
                                <li>Help look after the boat</li>
                                <li>Help to promote the work of the Trust</li>
                                <li>Help to run boat trips</li>
                                <li>Help us to raise funds</li>
                                <li>Help with administration</li>
                                <li>Use your special interests and talents</li>
                            </ul>
                        </Section>
                        <LowerLeftTopDiv>
                            <Section>
                                <h3 style={{ paddingBottom: '20px', padding: '20px' }}>The benefits of joining our crew...</h3>
                                <ul>
                                    <li>Friendship, Enjoyment, Personal fulfilment, Experience, Helping others</li>
                                    <li>To use and develop your skills, knowledge and interests at a time that suits you</li>
                                    <li>Receive training to further your abilities and experience in your desired field</li>
                                </ul>
                            </Section>
                        </LowerLeftTopDiv>
                    </TopDivLeft>
                    <TopDivRight>
                        <img style={{ shadowColor: 'red', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, height: '40vh', width: 'auto' }} src={Gerry} alt="Gerry" />
                    </TopDivRight>
                </TopDiv>
                    <Section>
                            <h4 style={{ padding: '20px', paddingLeft: '10vw', textAlign: "left" }}>Volunteers can do any of the following ...</h4>
                            <ul style={{ paddingBottom: '20px', paddingLeft: '20vw' }}>
                            <li>Fundraising</li>
                            <li>Working with groups</li>
                            <li>Crewing and Skippering</li>
                            <li>Publicity and Marketing</li>
                            <li>Training other people in
                                community boating skills</li>
                            <li>Maintenance work and cleaning</li>
                            <li>Admin work</li>
                            <li>Fundraising</li>
                            <li>Leading or being a member of
                                a special project team</li>
                            <li>Become a trustee</li>
                            <li>Become a committee member</li>
                            </ul>

                        <p style={{padding: '25px'}}>This is a great way to gain experience in many fields</p>
                        </Section>
                <p style={{ padding: '25px' }}>
                    We are always welcoming new volunteers,
                    If you are interested in getting on board, (Pun intended) please contact us for a chat.
                </p>
            </Container>
        </Root>
    );
};

export default Volunteers;
