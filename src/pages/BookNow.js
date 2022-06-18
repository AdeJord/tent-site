import React from "react";
import styled from "styled-components";
import boats from '../images/boats.jpg';
import '../App.css'
import "@fontsource/roboto"; // Defaults to weight 400.


const TextContainer = styled.div`
text-align: left;
display: flex;
height: 55vh;
flex-direction: column;
padding: 0px;

`

const ImgContainer = styled.div`;
padding-top: 10px;
width: 90vw;
height: auto;
`


const Home = () => {
    return (
        <div className = "container">
            <div className = "page-title">Book your trip Now!</div>
            {/* <ImgContainer>
                <img src={boats} style={{ width: "100%", height: "100%" }} alt='boats in a lock' />
            </ImgContainer> */}
            <p style={{ paddingLeft: '5vw', paddingTop: '2vw'}}>Don't waste time, book your trip now as availability is limited.</p>

            <TextContainer>
                <div style = {{ padding: '35px', paddingBottom: '20px'}}>
                <div style = {{ paddingBottom: '15px'}}>Call Mariel on <a href="tel:0121 357 2570">0121 357 2570</a> to make sure you don't miss out.</div>
                <div>Alternatively, email <a href="mailto:info@truman-enterprise.org.uk?body=My custom mail body">info@truman-enterprise.org.uk</a> to 
                secure your booking.</div>
                </div>
            </TextContainer>

        </div>
    );
};

export default Home;
