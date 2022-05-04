import React from "react";
import styled from "styled-components";
import '../App.css'
import Gerry from '../images/Gerry.jpg'
import "@fontsource/roboto"; // Defaults to weight 400.

const Container = styled.section`
display: flex;
font-family: "Roboto";
flex-direction: column;
width: 100%;
height: 75vh;
padding: 10px;
overflow-y: scroll;
@media (min-width: 768px) {
  height:65vh;
}
`
const PageTitle = styled.div`
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
padding-bottom: 25px;
height: 4vh;
font-size: 2em;
@media (min-width: 386) {
  font-size: .11em;
}
`

const Header = styled.h5`
display: flex;
width: 80vw;
margin: 20px;
text-align: center;
color: #114709;
font-size: 1.1em;
font-weight: 500;
padding: 20px;
`

const TopDiv = styled.div`
display: flex;
width: 80vw;
display: flex;
flex-direction: row
align-content: center;
padding: 20px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const TopDivLeft = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
align-content: centre;
padding: 3vw
@media (max-width: 768px) {
    width: 100vw;
}
`

const LowerLeftTopDiv = styled.div`
padding-top: 35px;
display: flex;
flex-direction: column;
align-text: centre;
width: 50vw;
@media (max-width: 768px) {
    width: 80%;
}
`

const TopDivRight = styled.div`
display: flex;
width: 100%
align-content: center;
padding: 20px;
@media (max-width: 768px) {
    width: 80%;
}
`

const Section = styled.div`
width: 100%;
align-content: centre;
padding-left: 10vw;
`

// const Image = styled.div`
// width: 100%;
// height: auto
// `

const Volunteers = () => {
    return (
        <>
            <Container>
                <PageTitle>Volunteers</PageTitle>
                <Header>The Trust owns and operates the narrowboat "Enterprise" which runs day trips for community groups and families with elderly,
                    disabled or unwell members.</Header>
                <hr />
                <TopDiv >
                    <TopDivLeft>
                        <div>
                            <p>
                                The trust is run completely by volunteers.
                            </p>

                            <p style={{ paddingBottom: '25px', paddingTop: '15px' }}>
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
                                <h3 style={{ paddingBottom: '20px', paddingLeft: '20px' }}>Benefits of joining our crew</h3>
                                <ul>
                                    <li>Friendship, enjoyment and fulfilment in your time as a volunteer</li>
                                    <li>To use and develop your skills, knowledge and interests at a time that suits you</li>
                                    <li>Receive training to further your abilities and experience in your desired field</li>
                                </ul>
                            </Section>
                        </LowerLeftTopDiv>
                    </TopDivLeft>
                    <TopDivRight>
                        <img style={{ shadowColor: 'red', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, height: 'auto', width: 'auto' }} src={Gerry} alt="Gerry" />
                    </TopDivRight>
                </TopDiv>
                    <Section>
                            <h3 style={{ paddingBottom: '20px', paddingLeft: '20px' }}>Volunteers can do any of the following ...</h3>
                            <ul>
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

                        {/* <p style={{paddingTop: '25px'}}>This is an ideal way to gain experience in many fields</p> */}
                        </Section>
                <p style={{ paddingBottom: '25px', paddingTop: '15px' }}>
                    We are always welcoming new volunteers,
                    If you are interested in getting on board, (Pun intended) please contact us for a chat
                </p>
            </Container>
        </>
    );
};

export default Volunteers;
