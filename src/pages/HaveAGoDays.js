import React from "react";
import styled from "styled-components";
import boats from '../images/boats.jpg';
import "@fontsource/roboto"; // Defaults to weight 400.

const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
align-items: center;
text-align: left;
padding-bottom: 100px;

`

const TextContainer = styled.div`
text-align: left;
display: flex;
flex-direction: column;
padding: 15px;

`

const ImgContainer = styled.div`;
padding-top: 10px;
width: 90vw;
height: auto;
`


const Home = () => {
    return (
        <Container>
            <ImgContainer>
                <img src={boats} style={{ width: "100%", height: "100%" }} alt='boats in a lock' />
            </ImgContainer>
            <h3 style={{ padding: '15px', textAlign: 'center' }}>"Have A Go" days </h3>
            <p style={{ padding: '15px', textAlign: 'center', fontStyle: 'italic' }}>A day out on the canal, "learning the ropes!" </p>
            <hr style={{ width: '90vw' }} />
            <TextContainer>
                Starting from Hatherton Marina (Near Cannock), we also offer "Have A Go" days where we offer a group of up to 12 people
                a "Bootcamp" course in working a narrowboat.  Supervised by a trained NCBA skipper and 2 NCBA trained crew members,
                everyone on board will be offered the chance to steer the boat.
            </TextContainer>


            <TextContainer>
                A return trip to Penkridge involves around 6 hours on the boat and goes through 6 locks where everyone is encouraged to
                get off the boat and practice the safe use  of the system.  Upon arrival at Penkridge the boat needs to be turned around
                and will then be moored up with a hands on demonstration on how to do so safely.  Lunch will be taken and any questions
                may be asked.
            </TextContainer>


            <TextContainer>
                A full day of learning how to steer,  wind,  moor the boat and how to safely operate locks.
                Everyone is offered the chance to steer the boat under the supervision of the skipper.

                Tea, Coffee and soft refreshments will be available
                free of charge, however you will need to bring a packed lunch.  Due to time restrictions we are unable to stop at the
                pub for food.
            </TextContainer>

            <TextContainer>
            Details and booking forms can be obtained from Christopher Rogers
            <a href="mailto:chairman@truman-enterprise.org.uk?body=My custom mail body">chairman@truman-enterprise.org.uk</a>
            Phone- 01922 479926 or mobile- 07763 214524
            </TextContainer>
        </Container>
    );
};

export default Home;
