import React from "react";
import styled from "styled-components";
import '../App.css'
import keays from '../images/keays.jpg'
import truman from '../images/truman.jpg'
import Enterprise from '../images/Enterprise.jpg'
import "@fontsource/roboto"; // Defaults to weight 400.
import { Container, Header } from '../ComponentStyles'

// const Header = styled.div`
// font-family: "Roboto";
// display: flex;
// width: 80vw;
// text-align: center;
// color: #114709;
// font-size: 1.1em;
// font-weight: 400;
// padding: 20px;
// `

const TopDiv = styled.div`
font-family: "Roboto";
display: flex;
width: 80vw;
display: flex;
flex-direction: row
align-content: center;
padding: 10px;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const TopDivLeft = styled.div`

font-family: "Roboto";
display: flex;
width: 80vw;
flex-direction: column;
align-content: left;
text-align: center;

`

const LowerLeftTopDiv = styled.div`
font-family: "Roboto";
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
font-family: "Roboto";
display: flex;
flex-direction: column;
width: 100%
align-content: center;
padding: 20px;
@media (max-width: 768px) {
    width: 80%;
}
`

const ImagesDiv = styled.div`
display: flex;
flex-direction: row;
`

const Section = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

// why cant I get Gerrys image to do this? (resize on page resize?)
const Image = styled.div`
display: flex;
flex-direction: column;
width: 75vw;
height: auto;
@media (min-width 802px) {
    width: 30vw;
}
`

const BottomBit = styled.div`
padding-left: 3.5vw;
width: 75vw;
padding-bottom: 20px;
@media (max-width: 802px){
    padding-top: 6vh;
}
`

const OurHistory = () => {
    return (
        <Container>
                <Header>Our History</Header>
                <Header>Truman Enterprise Narrowboat Trust (TENT) have been operating canal boat trips for over 50 years!</Header>
                <hr style={{ width: '85vw' }} />
                <TopDiv >
                    <TopDivLeft>

                        <Section>
                            <ul>
                                <li style={{ paddingBottom: '8px' }}>1965 - Young people and Youth Leaders in Walsall start to raise funds to build a boat for the ‘Youth of the town’</li>
                                <li style={{ paddingBottom: '8px' }}>1968 - HF Truman narrowboat purpose built at Keays boatyard in Walsall.</li>
                                <Image>
                                    <img src={keays} alt="keays boatyard" />
                                </Image>
                                <p style={{ paddingBottom: '20px', fontSize: '13px', textAlign: 'left' }}>Keays boatyard, where the the HF Truman was built</p>
                                <li style={{ paddingBottom: '8px' }}>1968 - Weekend trips for youth clubs and schools started</li>
                                <li style={{ paddingBottom: '8px' }}>1980 - Second boat "Usk" joins the Trust</li>
                                <li style={{ paddingBottom: '8px' }}>1992 - AJ Felgate launched to replace the Usk</li>
                                <li style={{ paddingBottom: '8px' }}>1997 - HF Truman Narrowboat Trust became a registered charity.</li>
                                <Image>
                                    <img src={truman} alt="The Truman" />
                                </Image>
                                <p style={{ paddingBottom: '20px', fontSize: '13px', textAlign: 'left' }}>The original 'H.F. Truman' in action on the Staffs & Worcs Canal</p>
                                <li style={{ paddingBottom: '8px' }}>1997 - Old HF Truman sold and a new boat given the name HF Truman launched</li>
                                <li style={{ paddingBottom: '8px' }}>2005 - Walsall Enterprise narrowboat joins the Trust</li>
                                <li style={{ paddingBottom: '8px' }}>2006 - Trust renamed Truman Enterprise Narrowboat Trust</li>
                                <li style={{ paddingBottom: '8px' }}>2008 - TENT celebrated 40 years of Community boating</li>
                                <li style={{ paddingBottom: '8px' }}>2011 - Walsall Council withdraws funding for the Senior Boat Warden salary, so severing the Trust’s link with WMBC.</li>
                                <li style={{ paddingBottom: '8px' }}>2018 - The trust celebrated 50 years of Community boating</li>
                                <li style={{ paddingBottom: '8px' }}>2018 - AJ Felgate sold to maintain trust efficiency</li>
                                <li style={{ paddingBottom: '8px' }}>2020 - No boat trips due to Coronavirus</li>
                                <li style={{ paddingBottom: '8px' }}>2020 - Walsall Enterprise re-named Enterprise.</li>
                                <Image>
                                    <img style={{padding: '20px'}}src={Enterprise} alt="Enterprise" />
                                    <hr />
                                </Image>
                            </ul>

                            <div className = "page-title">
                                H F TRUMAN NARROWBOAT COMMITTEE
                            </div>

                        </Section>
                        <LowerLeftTopDiv>
                            <BottomBit>
                                <p style={{ paddingBottom: '20px' }}>The project began in 1965, under the auspices of the Walsall Youth Leaders Council, who set out to raise money to build a narrowboat
                                    for the young people of the town. Through many successful sponsored events by youth clubs and other organisations sufficient
                                    money was raised. The original wooden 'H.F. Truman' was built by Peter Keay and Son of Walsall and launched in September 1968 as a
                                    purpose-built boat to carry groups of young people. After completion a Trust was set up and a Management Committee appointed for
                                    operational purposes.</p>
                                <p>After 30 years of service to the Youth and Community of Walsall the original 'Truman' needed replacing. A fund-raising sub-committee was set up with a
                                    target of raising sufficient funds to commission a modern steel narrowboat. Local companies were approached and a successful bid for £50,000 was made
                                    to the National Lottery Charities Board under their youth issues programme. In March 1997 the Trust took delivery of a new boat and after consultations
                                    with user groups fitting out was undertaken in Wolverhampton. At an inauguration and naming ceremony on 14th September 1997 the new boat took over the
                                    'H.F. Truman' name and the old boat was sold locally under a new name.</p>
                            </BottomBit>
                        </LowerLeftTopDiv>
                    </TopDivLeft>
                    {/* <TopDivRight>

                        <img style={{ shadowColor: 'red', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2, height: '40vh', width: 'auto' }} src={lenwilson} alt="Len Wilson" />
                        <p style={{ paddingBottom: '20px', textAlign: 'center' }}>Len Wilson, one of the earliest skippers, seen here at the tiller of the 'Usk' travelling the Wyrly and Essington Canal</p>
                    </TopDivRight> */}
                </TopDiv>
        </Container>
    );
};

export default OurHistory;
