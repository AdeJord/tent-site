import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import "../App.css";
import { Container, TextContainer, Header } from "../ComponentStyles";

const List = styled.ul`
  font-family: "Roboto";
  padding: 10px;
  padding-bottom: 65px;
`;

const CovidSafeCruising = () => {
  return (
    <Container>
      <Header>Covid Safe Cruising</Header>

      <TextContainer>
        Our concern (as always) is to run safe and enjoyable community boat
        trips on the beautiful Staffs & Worcs canal. We can only do this if all
        Covid restrictions are lifted. Even then we want to proceed cautiously,
        so we are taking the following precautions to protect passengers and
        boat staff.
      </TextContainer>

      <List>
        <li>
          Persons (boat staff & passengers) will not be permitted boat trips if
          they have had in the last 2 weeks: a positive Covid result, symptoms
          indicating possible infection (high temperature, loss of taste of
          smell, dry cough, cold symptoms) or been in close contact with a Covid
          positive person. The trip leader needs to check this in advance of the
          trip and will sign a form before the trip starts to verify this.
        </li>
        <br />
        <li>
          Persons (boat staff & passengers) will not be permitted on boat trips
          unless they are fully Covid vaccinated. The trip leader needs to check
          this in advance of the trip and will sign a form before the trip
          starts to verify this. The skipper will have the final say if a trip
          goes ahead or not.
        </li>
        <br />
        <li>
          All persons (boat staff & passengers) will have a face mask or visor
          with them. Boat staff will wear these whenever social distancing (2M)
          is impossible e.g. when passengers are boarding or using the lift,
          giving the safety talk, walking through the boat. Passengers will use
          a face covering whenever requested to do so by boat staff or group
          leader.
        </li>
        <br />
        <li>
          {" "}
          Boat staff will make a special effort to keep separate from
          passengers. They will be positioned in the kitchen or by the wash
          basin when giving the safety talk or the talk can be given outside.
          They will remain on the rear deck as much as possible throughout the
          trip. Group leaders will assist passengers on the ramp and steps.
          Unless there is an emergency, the rear cabin & back deck will be for
          boat staff only. The group leader will be responsible for dealing
          directly with Sonny to hand over food, money & receipt on the front
          deck.
        </li>
        <br />
        <li>
          All persons (boat staff & passengers) will be encouraged to clean
          their hands thoroughly & frequently. Soap, hot water & paper towels
          will be readily available at the sink and wash basin. Hand sanitiser
          will be offered just before passengers board the boat and will be
          available in the main saloon, on the front deck and in the back cabin.
        </li>
        <br />
        <li>
          Passengers will be encouraged to sit on the front deck in the fresh
          air & have windows open in the saloon for good ventilation
        </li>
        <br />
        <li>
          A minimum amount of cutlery & crockery (12 of each item) & kitchen
          equipment will be provided for the group in order to minimise cleaning
          at the end of the trip.
        </li>
        <br />
        <li>
          2 tea towels and 1 J-cloth only will be provided for each trip. The
          teatowels will be taken home & laundered by the skipper.
        </li>
        <br />
        <li>
          There will be no soft furnishings (cushions, blankets) on board. If
          groups wish to bring their own cushions & rugs, they can. All books
          will be removed from the shelves in the saloon.
        </li>
        <br />
        <li>
          The above information will be conveyed to group leaders by receiving a
          copy of these Covid procedures when they book a trip and signing an
          amended safety talk form before the trip starts. There will be a copy
          of the Covid procedures on the TENT website.
        </li>
        <br />
        <li>
          The above information will be conveyed to all passengers through the
          amended safety talk and notices throughout the boat.
        </li>
        <br />
        <li>
          The above information will be conveyed to boat staff during pre-season
          training sessions. All skippers & crew will be given a copy of these
          Covid procedures
        </li>
        <br />
        <li>
          At the end of each trip, boat staff will give the boat a thorough
          clean including all touch points and surfaces. Anti-bacterial spray
          and disposable gloves will be available. This procedure is expected to
          take 2 boat staff 1 hour.
        </li>
        <br />
      </List>
    </Container>
  );
};

export default CovidSafeCruising;
