import React from "react";
import { Container, Header, Root, TextContainer } from "../ComponentStyles";
import styled from "styled-components";

const StyledLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const DownloadLink = styled.a`
  display: inline-block;
  padding: 0.75rem 1rem;
  background-color: #4a6741;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
  text-align: center;
  width: fit-content;
  margin: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }

  &:hover {
    background-color: #3d563b;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: #051101;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 15px 0;
  color: #051101;
`;

const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 40px;
  margin: 15px 0;
  li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
`;

export const BookYourTrip = () => {
  return (
    <Root>
      <Container>
        <Header>Book Your Trip</Header>
        <TextContainer>
          <ContentContainer>
            <SectionTitle>2025 Bookings</SectionTitle>
            <StyledList>
              <li>Bookings open from 24th February</li>
              <li>Trips are available from 14th April to 31st October 2024</li>
              <li>Trips usually start at 10.30am</li>
            </StyledList>

            <p>You can download current brochure by using the link below</p>
            <DownloadLink
              href="https://adejord.co.uk/uploads/docs/Boat-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Boat Brochure
              
            </DownloadLink>
            <br />

            <p>
              If you wish to reserve a date or find out more details contact:
            </p>
            <br />
            <p>
              Jenny:{" "}
              <StyledLink href="tel:07895053090">07895 053090</StyledLink>
              <br />
              Or Mariel:{" "}
              <StyledLink href="mailto:enterprise@truman-enterprise.org.uk">
                enterprise@truman-enterprise.org.uk
              </StyledLink>
            </p>

            <SectionTitle>Trip Options and Costs</SectionTitle>
            <p>
              All trips take place on the Staffs & Worcs canal which winds its
              way through countryside, passing farmland and woodland. The slow
              pace, natural surroundings and peace & quiet are very relaxing.
              The canal environment is a very friendly one.
            </p>

            <SectionTitle>Lunch Options</SectionTitle>

            <SubTitle>Bring your own food</SubTitle>
            <StyledList>
              <li>
                There is some storage space in the small fridge in the kitchen
              </li>
              <li>
                There are no cooking facilities on board, apart from 2 gas
                burners
              </li>
              <li>
                Bringing your own food is the only option on Have-a-go trips to
                Penkridge
              </li>
            </StyledList>

            <SubTitle>Fish & Chips</SubTitle>
            <StyledList>
              <li>
                These are ordered from the boat & delivered to Coven or Oxley
              </li>
              <li>
                You can download the current price list by using the link below
              </li>
            </StyledList>

            <SubTitle>Pub Lunch at the Anchor, Coven</SubTitle>
            <p>(This is available for trips to Coven only)</p>
            <p>
              Pub menus will be available on the boat for you to browse, but
              there is no need for pre-ordering. You will be dropped off at the
              pub at 12 noon. In advance we will book a table for your group for
              12.15pm. You are asked to return to the boat at 2.30pm at the
              latest ready for the return journey.
            </p>

            <SectionTitle>Where trips start</SectionTitle>
            <p>
              Trips to Coven and Autherley usually start at 10.30am. Have-a-go
              trips usually start at 9.00am.
            </p>
            <p>All trips start from:</p>
            <p>
              Hatherton Marina
              <br />
              Queen's Road
              <br />
              Calf Heath
              <br />
              Wolverhampton
              <br />
              WV10 7DT
            </p>
            <br />

            <p>
              <strong>
                Please note there are 4 sets of gates to marinas in close
                proximity in Calf Heath. Please make sure you use the gates in
                Queen's Road.
              </strong>
            </p>

            <p>
              They are slightly set back from the road between modern houses.
              When you arrive the gates will be locked. Our volunteers will be
              looking out for your arrival but if no-one comes to unlock the
              gates please phone the skipper on{" "}
              <StyledLink href="tel:07779385069">07779 385069</StyledLink>. This
              phone number is on the gate.
            </p>

            <SubTitle>Take note:</SubTitle>
            <StyledList>
              <li>
                When you & your group arrive in the boatyard, please remain at
                your vehicle until a member of boat staff meets you.
              </li>
              <li>
                When you do leave your vehicle, please remain inside or
                alongside the Enterprise, as other areas are private within the
                marina.
              </li>
              <li>
                The marina gates will be locked while you are on your boat trip,
                but vehicles and content are left at the owners' risk.
              </li>
            </StyledList>

            <SectionTitle>Safety</SectionTitle>
            <p>We take your Health and Safety very seriously:</p>
            <StyledList>
              <li>The boat has a CRT license and a Boat Safety Certificate</li>
              <li>
                The Trust has public liability insurance. You can download copy
                of the current certificate using the link below (must be 2025
                certificate)
              </li>
              <li>
                Skippers and crew are well trained to National Community Boats
                Association standards
              </li>
              <li>Skippers and crew have enhanced DBS checks every 3 years</li>
              <li>
                The skipper is responsible for the safe management of the boat
              </li>
              <li>
                Group leaders are responsible for the safety of passengers and
                for administering first aid
              </li>
              <li>
                The Trust cannot accept any responsibility for passengers when
                they are off the boat
              </li>
              <li>
                Risk assessments are available to any group leader or
                organisation. They are updated every year so they remain valid.
              </li>
            </StyledList>
            <p>
              It is very important that we monitor any risks that may be present
              so we can put measures in place to control these risks. You can
              download the latest risk assessment on the link below (must be
              2025 version)
            </p>
          </ContentContainer>
        </TextContainer>
      </Container>
    </Root>
  );
};
