import React from "react";
import styled from "styled-components";
import '../special.css'
import "@fontsource/roboto"; // Defaults to weight 400.

const Container = styled.section`
display: flex;
flex-direction: column;
width: 100%;
align-items: left;
text-align: left;
padding-bottom: 100px;


`

const TextContainer = styled.div`
text-align: left;
display: flex;
flex-direction: column;
padding: 15px;

`



const HowToPay = () => {
    return (
        <Container>

            <h3 style={{ padding: '15px', textAlign: 'center' }}>How to pay for you trips</h3>
            {/* <p style={{ padding: '15px', textAlign: 'center', fontStyle: 'italic' }}>A day out on the canal, "learning the ropes!" </p> */}
            <hr style={{ width: '90vw' }} />
            <TextContainer>
                Please make cheques payable to "Truman Enterprise Narrowboat Trust" and send to Mariel Bishop at the following address
            </TextContainer>

                <ul className="adjust-line-height">
                    <li>88 Millfield Road</li>
                    <li>Handsworth Wood,</li>
                    <li>Birmingham,</li>
                    <li>B20 1EB</li>
                </ul>

            <TextContainer>
            Alternatively payment can be made by BACS,  Please consult your invoice for details.
            </TextContainer>

            <TextContainer>
           Payments are due 28 days before each trip and receipts will be issued upon request
            </TextContainer>

            <TextContainer>
            Any queries about payments please contact Chris Rogers 07763 214524 or E Mail:- 
            <a href="mailto:treasurer@truman-enterprise.org.uk?body=My custom mail body">treasurer@truman-enterprise.org.uk</a>
           </TextContainer>


        </Container>
    );
};

export default HowToPay;
