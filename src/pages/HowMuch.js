import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import "../App.css";
import "../map.css";
import { Container, TextContainer, Header } from "../ComponentStyles";

// Function to fetch prices
const fetchAllPrices = async () => {
  const response = await fetch("https://adejord.co.uk/prices");
  if (!response.ok) {
    throw new Error("Failed to fetch prices");
  }
  return response.json();
};

const HowMuch = () => {
  const [prices, setPrices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPrices();
        setPrices(data);
      } catch (err) {
        setError("Failed to fetch prices");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (prices.length === 0) {
    return <div>Loading...</div>;
  }

  const priceData = prices[0];

  return (
    <Container style={{ paddingBottom: "100px" }}>
      <Header>How much does it cost?</Header>
      <div style={{ padding: "2vw" }}>
        <table>
          <thead>
            <tr>
              <th>Trip</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>To Coven and back with pub meal at the Anchor at Coven</td>
              <td>5 Hours</td>
              <td>£{priceData.trip1}</td>
            </tr>
            <tr>
              <td>
                To Coven and back with fish & chips delivered to the boat at
                Coven
              </td>
              <td>5 Hours</td>
              <td>£{priceData.trip2}</td>
            </tr>
            <tr>
              <td>To Coven and back and bring your own packed lunches</td>
              <td>5 Hours</td>
              <td>£{priceData.trip3}</td>
            </tr>
            <tr>
              <td>
                To Autherley and back with fish & chips delivered to the boat at
                Oxley
              </td>
              <td>5 1/2 Hours</td>
              <td>£{priceData.trip4}</td>
            </tr>
            <tr>
              <td>To Autherley and back and bring your own packed lunches</td>
              <td>5 1/2 Hours</td>
              <td>£{priceData.trip5}</td>
            </tr>
            <tr>
              <td>
                Have A Go Days, To Penkridge and back 8 hours of Boat Bootcamp
                with locks!
              </td>
              <td>8 Hours</td>
              <td>£{priceData.trip6}</td>
            </tr>
          </tbody>
        </table>
        <TextContainer>
          We can be flexible with trips starting at a different time or being
          longer or shorter. We will always try to accommodate our groups needs.
        </TextContainer>
      </div>

      <Header>Safety</Header>
      <ul>
        <li>
          The boat has a CRT license and Boat Safety Certificate
          {/* which you can
          download{" "}          <a
            href="https://adejord.co.uk/uploads/docs/Boat-Safety-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >HERE</a> */}
        </li>
        <li>
          The Trust has{" "}
          <a
            href="https://adejord.co.uk/uploads/docs/Insurance-Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Public Liability Insurance.
          </a>{" "}
          {"  "}
          Personal accident insurance is not provided and groups should arrange
          their own cover.
        </li>
        <li>Skippers and crew are well trained to NCBA standards.</li>
        <li>
          The Skipper is ultimately responsible for the safe management of the boat and has
          the duty to cancel a trip if they deem it unsafe to do so.
        </li>
        <li>
          Group organisers are responsible for the safety of members of their
          group and for administering any first aid. <br /> You can see the
          Group Leader Policy <br />{" "}
          <a
            href="https://adejord.co.uk/uploads/docs/Group-Leader-Policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            HERE
          </a>{" "}
          {"  "}
        </li>
        <li>
          Risk assessments are available{" "}
          <a
            href="https://adejord.co.uk/uploads/docs/Risk-Assessment.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            HERE
          </a>{" "}
          {"  "}
        </li>
        <li>
          The Trust cannot accept any responsibility for passengers when they
          are off the boat.
        </li>
      </ul>
      <br></br>
    </Container>
  );
};

export default HowMuch;
