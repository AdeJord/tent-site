import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import '../App.css'
import '../map.css'
import Map from '../components/Location/Map'



const Container = styled.div`
font-family: "Roboto";
display: flex;
flex-direction: row;
height: auto;
width: auto;
padding: 20px;
padding-bottom: 100px;
overflow: hidden;
align-items: center;
@media (max-width: 802px) {
  flex-direction: column;
}
`

const PageTitle = styled.div`

font-family: "Roboto";
width: calc (100% - 25px);
text-align: center;
display: flex;
flex-direction: column;
height: 2vh;
padding-bottom: 25px;
font-size: 1.3em;
@media (min-width: 386) {
  font-size: .11em;
}
`
const TestDiv = styled.div`
width: 100%;
margin: 10px

`

const TextDiv = styled.div`
display: flex;
flex-direction: column;
overflow: scroll;
align-content: center;
text-align: center;
font-size: 15px;
height: 100%;
width: 50%;
display: flex;
padding: 0 , 5, 0, 5;
@media (max-width: 802px) {
  width: 90vw;
}
`

const MapDiv = styled.div`
display: flex;
flex-direction: column;
align-content: center;
text-align: center;
height: 75%;
width: 100%;
display: flex;
padding: 0 , 5, 0, 5;
flex-direction: column;
@media (max-width: 802px) {
  width: 90vw;
}
`

const ContactUs = () => {
  return (
    <Container>
      <TestDiv>
        <PageTitle>Our Location</PageTitle>
        <MapDiv>
        <Map />
        </MapDiv>
        <p style={{padding: '15px', color: 'darkred'}}>What Three Words:- ///armrests.chew.commutes </p>
      </TestDiv>
      <TestDiv>
        <PageTitle>Contact Details</PageTitle>
        <div>
        <table>
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Role</th>
              <th>Contact Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trust Enquiries</td>
              <td>Christopher Rogers</td>
              <td>Chair of Management
                Committee</td>
              <td>01922 479926<br />07763 214 524<br />
                <a href="mailto:chairman@truman-enterprise.org.uk?body=My custom mail body">chairman@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>Financial Matters</td>
              <td>Christopher Rogers</td>
              <td>Treasurer</td>
              <td>01922 479926<br />07763 214 524<br />
                <a href="mailto:chairman@truman-enterprise.org.uk?body=My custom mail body">chairman@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>General Enquiries</td>
              <td>Mariel Bishop</td>
              <td>Secretary</td>
              <td>0121 357 2570<br />
                <a href="mailto:info@truman-enterprise.org.uk?body=My custom mail body">info@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>Day trip bookings</td>
              <td>Mariel Bishop</td>
              <td>Booking Secretary</td>
              <td>0121 357 2570<br />
                <a href="mailto:info@truman-enterprise.org.uk?body=My custom mail body">info@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>NCBA Training Courses</td>
              <td>David Leaper</td>
              <td>Trust Trainer</td>
              <td>07971 191 786<br />
                <a href="mailto:trainer@truman-enterprise.org.uk?body=My custom mail body">trainer@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>Volunteering Opportunities</td>
              <td>Jennifer Christian</td>
              <td>Volunteering</td>
              <td>07908 084 744<br />
                <a href="mailto:volunteer@truman-enterprise.org.uk?body=My custom mail body">volunteer@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>Website, Tripadvisor, Facebook, etc</td>
              <td>Adrian Jordan</td>
              <td>Social Media Co-ordinator</td>
              <td>07512 896 176<br />
                <a href="mailto:feedback@truman-enterprise.org.uk?body=My custom mail body">feedback@truman-enterprise.org.uk</a></td>
            </tr>
          </tbody>
        </table>
        </div>
      </TestDiv>

    </Container>
  );
};

export default ContactUs;

