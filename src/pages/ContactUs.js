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
overflow: scroll;
align-items: center;
@media (max-width: 802px) {
  flex-direction: column;
}
`

const PageTitle = styled.div`

font-family: "Roboto";
width: 100%;
text-align: center;
display: flex;
flex-direction: column;
justify-text: end;
height: 2vh;
padding: 15px 25px 35px;
font-size: 1.3em;
@media (min-width: 386) {
  font-size: .11em;
}
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
height: 100%;
width: 50%;
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
      
      <MapDiv>
        <PageTitle>Our Location</PageTitle>

        <Map />
      </MapDiv>
      <TextDiv>
        <PageTitle>Contact Details</PageTitle>
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
                <a href="chairman@truman-enterprise.org.uk?body=My custom mail body">email: chairman@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>Financial Matters</td>
              <td>Christopher Rogers</td>
              <td>Treasurer</td>
              <td>01922 479926<br />07763 214 524<br />
                <a href="chairman@truman-enterprise.org.uk?body=My custom mail body">email: chairman@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>General Enquiries</td>
              <td>Mariel Bishop</td>
              <td>Secretary</td>
              <td>0121 357 2570<br />
                <a href="info@truman-enterprise.org.uk?body=My custom mail body">email: info@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>Day trip bookings</td>
              <td>Mariel Bishop</td>
              <td>Booking Secretary</td>
              <td>0121 357 2570<br />
                <a href="info@truman-enterprise.org.uk?body=My custom mail body">email: info@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>NCBA Training Courses</td>
              <td>David Leaper</td>
              <td>Trust Trainer</td>
              <td>07971 191 786<br />
                <a href="trainer@truman-enterprise.org.uk?body=My custom mail body">email: trainer@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>Volunteering Opportunities</td>
              <td>Jennifer Christian</td>
              <td>Volunteering</td>
              <td>07908 084 744<br />
                <a href="volunteer@truman-enterprise.org.uk?body=My custom mail body">email: volunteer@truman-enterprise.org.uk</a></td>
            </tr>
            <tr>
              <td>Website, Tripadvisor, Facebook, etc</td>
              <td>Adrian Jordan</td>
              <td>Social Media Co-ordinator</td>
              <td>07512 896 176<br />
                <a href="mailto:adejord@gmail.com?body=My custom mail body">email: adejord@gmail.com</a></td>
            </tr>
          </tbody>
        </table>

      </TextDiv>

    </Container>
  );
};

export default ContactUs;

