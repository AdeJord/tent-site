import React from "react";
import styled from "styled-components";
import Link from 'react-dom'
import "@fontsource/roboto"; // Defaults to weight 400.
import '../App.css'
import '../map.css'


const Container = styled.div`
font-family: "Roboto";
display: flex;
flex-direction: row;
height: auto;
width: auto;
padding-top: 1vw;
padding: 2vw;
min-height: 75.5vh;
overflow: hidden;
align-items: center;
@media (max-width: 802px) {
  flex-direction: column;
}
`

const TestDiv = styled.div`
width: 100%;
margin: 10px

`


const HowMuch = () => {
  return (
    <Container>

      <TestDiv>
        <div className = "page-title">How much does it cost?</div>
        <div style={{ padding: '2vw' }}>
          <table>
            <thead>
              <tr>
                <th>Trip</th>
                <th>Time</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>To Coven and back with pub meal at the Anchor at Coven </td>
                <td>5 Hours</td>
                <td>£100</td>
              </tr>
              <tr>
                <td>To Coven and back with fish & chips delivered to the boat at Coven </td>
                <td>5 Hours</td>
                <td>£100</td>
              </tr>
              <tr>
                <td>To Coven and back and bring your own packed lunches</td>
                <td>5 Hours</td>
                <td>£100</td>
              </tr>
              <tr>
                <td>To Autherley and back with fish & chips delivered to the boat at Oxley</td>
                <td>5 1//2 Hours</td>
                <td>£130</td>
              </tr>
              <tr>
                <td>To Autherley and back and bring your own packed lunches</td>
                <td>5 1//2 Hours</td>
                <td>£130</td>
              </tr>
              <tr>
                <td>Have A Go Days, To Penkridge and back 8 hours of Boat Bootcamp with locks!</td>
                <td>8 Hours</td>
                <td>£200</td>
              </tr>
            </tbody>
          </table>
          <h4 style={{ paddingTop: '15px' }}>We can be flexible with trips starting at a different time or being longer or shorter.
            We will always try to accommodate what our groups would like.</h4>
        </div>

        <div className = "page-title" style={{ paddingTop: '20px' }}>Safety</div>
        <ul>
          <li>The boat has a CRT license and Boat Safety Certificate. </li>
          <li>The Trust has public liability insurance. Personal accident insurance is not provided and groups should arrange their own cover. </li>
          <li>Skippers and crew are well trained to NCBA standards.</li>
          <li>The skipper is responsible for the safe management of the boat.</li>
          <li>Group organisers are responsible for the safety of members of their group and for administering any first aid.</li>
          <li>Risk assessments are available on request.</li>
          <li>The Trust cannot accept any responsibility for passengers when they are off the boat.</li>
        </ul>
<br></br>
<a href={('TermsAndCond')}>Terms and Conditions</a>



      </TestDiv>

    </Container>
  );
};

export default HowMuch;

