import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import "../App.css";
import "../map.css";
import Map from "../components/Location/Map";
import { AddAPhoto } from "@material-ui/icons";
import { TextContainer } from '../ComponentStyles'

const Container = styled.div`
font-family: "Roboto";
display: flex;
flex-direction: row;
height: auto;
width: 100%;
padding-top: 10px;
align-items: center;
justify-content: center;


@media (max-width: 802px) {
  flex-direction: column;
}
`

const TextDiv = styled.div`
  margin: 10px;
  width: 100%;
  height: 80vh;
  font-size: 1.2vw;
  @media (max-width: 802px) {
    height: auto;
  }
`;

const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px;
  text-align: center;
  width: 100%;
  height: 75%;
  @media (max-width: 802px) {
    width: 90vw;
    padding: 10px;
  }
`;
const AddressDiv = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  display: flex;
  font-size: 15px;
  // padding: 10px;
  flex-direction: column;
  align-content: center;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 802px) {
    width: 90vw;
  }
`;
const ContactUs = () => {
  return (
    <Container>
      <TextContainer>
        <div 
        style={{
          fontSize: '25px', 
          textAlign: 'center',
          }}>Our Location</div>
        <AddressDiv>
          Hatherton Marina, Queens Road, Calf Heath, Wolverhampton, WV107DT
        </AddressDiv>
        <MapDiv>
          <Map />
        </MapDiv>
        <p style={{ paddingTop: "3px", color: "darkred", fontSize: '15px', height: "30px"}}>
          What Three Words:- ///armrests.chew.commutes
        </p>
      </TextContainer>
      <TextDiv>
        <div style={{fontSize: '25px', textAlign: 'center'}}>Contact Details</div>
        <br />
        <br />
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
                <td>Chair of Management Committee</td>
                <td>
                  <a href='tel:01922 479926'>01922 479926</a>
                  <br />
                  <a href='tel:07763 214 524'>07763 214 524</a>
                  <br />
                  <a href="mailto:chairman@truman-enterprise.org.uk?body=My custom mail body">
                    chairman@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>Financial Matters</td>
                <td>Christopher Rogers</td>
                <td>Treasurer</td>
                <td>
                  <a href='tel:01922 479926'>01922 479926</a>
                  <br />
                  <a href='tel:07763 214 524'>07763 214 524</a>
                  <br />
                  <a href="mailto:chairman@truman-enterprise.org.uk?body=My custom mail body">
                    chairman@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>General Enquiries</td>
                <td>Mariel Bishop</td>
                <td>Secretary</td>
                <td>
                  <a href='tel:0121 357 2570'>0121 357 2570</a>
                  <br />
                  <a href="mailto:info@truman-enterprise.org.uk?body=My custom mail body">
                    info@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>Day trip bookings</td>
                <td>Mariel Bishop</td>
                <td>Booking Secretary</td>
                <td>
                  <a href='tel:0121 357 2570'>0121 357 2570</a>
                  <br />
                  <a href="mailto:info@truman-enterprise.org.uk?body=My custom mail body">
                    info@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>NCBA Training Courses</td>
                <td>David Leaper</td>
                <td>Trust Trainer</td>
                <td>
                  <a href='tel:07971 191 786'>07971 191 786</a>
                  <br />
                  <a href="mailto:trainer@truman-enterprise.org.uk?body=My custom mail body">
                    trainer@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>Volunteering Opportunities</td>
                <td>Jennifer Christian</td>
                <td>Volunteering</td>
                <td>
                  <a href='tel:07908 084 744'>07908 084 744</a>
                  <br />
                  <a href="mailto:volunteer@truman-enterprise.org.uk?body=My custom mail body">
                    volunteer@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
              <tr>
                <td>Website & Booking system developer, Tripadvisor, Facebook, etc</td>
                <td>Adrian Jordan</td>
                <td>
                  Developer & Social Media <br />
                  Co-ordinator
                </td>
                <td>
                  <a href='tel:07512 896 176'>07512 896 176</a>
                  <br />
                  <a href="mailto:feedback@truman-enterprise.org.uk?body=My custom mail body">
                    feedback@truman-enterprise.org.uk
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </TextDiv>
    </Container>
  );
};

export default ContactUs;
