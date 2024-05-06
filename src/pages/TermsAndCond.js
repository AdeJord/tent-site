import React from "react";
import styled from "styled-components";
import "@fontsource/roboto"; // Defaults to weight 400.
import { Link, useNavigate } from "react-router-dom";
import { Container, TextContainer, Header } from "../ComponentStyles";

const List = styled.ul`
  font-family: "Roboto";
  padding-left: 30px;
`;

const TermsAndCond = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container style={{ paddingBottom: "100px" }}>
      <Header>Terms and Conditions</Header>

      <List>
        <li>
          In advance of a trip group leaders are responsible for reading 'Covid
          Safe Cruising' which will we sent to them with their booking form.
          Group leaders must ensure that the procedures stated in this document
          are carried out.
        </li>
        <br />
        <li>
          A maximum of two wheelchair users may be passengers on each trip. All
          other passengers must be able to ascend three steps in the unlikely
          event that an emergency evacuation of the boat becomes necessary.
        </li>
        <br />
        <li>A skipper and crew member will accompany every trip.</li>
        <br />
        <li>
          The Skipper is in overall charge of the boat including passenger lift.{" "}
        </li>
        <br />
        <li>
          {" "}
          Passenger safety is the responsibility of the boat staff and group
          leaders working together.
        </li>
        <br />
        <li>
          When completing the booking form, group leaders will choose whether
          their trip is NON-SMOKING (smoking only allowed on the towpath) or
          SMOKING (smoking only allowed on the front deck). All passengers in
          the group must adhere to this choice.
        </li>
        <br />
        <li>
          The supervision of any children in the group is the responsibility of
          the adult passengers, not the boat staff.
        </li>
        <br />
        <li>
          Each group will be given a pre-trip safety talk by the boat staff.
          Group leaders must ensure that safety procedures are adhered to by all
          passengers.
        </li>
        <br />
        <li>
          The Truman Enterprise Narrowboat Trust cannot accept any
          responsibility for passengers when they are off the boat.
        </li>
        <br />
        <li>
          {" "}
          Group Staff are responsible for the well-being and care of their group
          members. This includes moving wheelchair users and giving any physical
          assistance passengers require with mobility and using the toilet. In
          some cases this may mean one to one support.
        </li>
        <br />
        <li>
          There is a first aid kit on board which is available for use by group
          leaders and/or passengers. Boat staff are not first aid trained.
        </li>
        <br />
        <li>
          Your group must not exceed twelve persons including a minimum of two
          Staff. Children and babies must be included in the twelve. The bus
          driver for your group MUST be included in your count if they are to
          join the trip. Please do not place the boat staff in the embarrassing
          position of having to turn people away.
        </li>
        <br />
        <li>
          Dogs are not permitted on trips unless they are working dogs e.g.
          guide dogs, hearing dogs for deaf people, etc.
        </li>
        <br />
        <li>
          The Trust holds appropriate insurance cover for passenger and public
          liability. Current certificates are displayed on the boat.
        </li>
        <br />
        <li>
          The Truman Enterprise Narrowboat Trust cannot accept any
          responsibility for the safety of vehicles and their contents at
          Hatherton Marina.
        </li>
        <br />
        <li>
          Late arrival to embarkation point may mean that the trip will be cut
          short, return late or be cancelled.
        </li>
        <br />
        <li>
          The booking form must be completed, signed and returned to us to
          confirm your booking within 14 days.
        </li>
        <br />
        <li>
          Full payment of invoice must be paid 28 days before the date of trip.
          Trips will not go ahead unless paid for.
        </li>
        <br />
        <li>
          Your payment is non-refundable in the event you have to cancel the
          trip.
        </li>
        <br />
        <li>
          The Truman Enterprise Narrowboat Trust has the right to cancel a
          booking for whatever reason deemed necessary and without explanation.
          All monies paid will be refunded. The Truman Enterprise Narrowboat
          Trust cannot be held responsible if due to mechanical fault or any
          other reason the trip is held up or even cancelled. Every effort will
          be made to rectify the situation to enable trips to go ahead.
        </li>
        <br />
        <li>
          The Truman Enterprise Narrowboat Trust will retain contact details
          provided by each group so that information about trips can be
          communicated efficiently. If any group no longer want their contact
          details held by the Trust they must inform the Bookings Secretary.
        </li>
        <br />
      </List>
      <div>
        <TextContainer>
          Download a copy of the current risk assessments
          <a
            href="https://adejord.co.uk/uploads/docs/Risk-Assessment.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            HERE
          </a>
        </TextContainer>
        <TextContainer>
          Download a copy of our current insurance certificate
          <a
            href="https://adejord.co.uk/uploads/docs/Insurance-Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            HERE
          </a>
        </TextContainer>
        <button style={{ background: "#9FDDA8" }} onClick={goBack}>
          GO BACK
        </button>
      </div>
    </Container>
  );
};

export default TermsAndCond;
