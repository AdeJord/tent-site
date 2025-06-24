import React from 'react';
import styled from 'styled-components';
import { Header } from "../ComponentStyles";


const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-size: 18px;
`;


const Intro = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
`;

const Section = styled.div`
  margin-bottom: 35px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 18px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 40px;
  font-size: 18px;
  li {
    margin-bottom: 12px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 24px;
  font-size: 18px;
  line-height: 1.5;
  
  a {
    color: #0066cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
  line-height: 1.5;
`;

const Volunteers = () => {
  return (
    <Container>
      <Header>Volunteers</Header>
      
      <Intro>
        The Trust is run completely by volunteers and you are very welcome to join us. 
        No experience is needed as training will be given.
      </Intro>

      <Section>
        <SectionTitle>As a volunteer you can help with...</SectionTitle>
        <List>
          <li>Looking after the boat</li>
          <li>Publicity & marketing</li>
          <li>Running boat trips</li>
          <li>Boat & engine maintenance</li>
          <li>Cleaning</li>
          <li>Admin & paperwork</li>
          <li>Fund raising</li>
          <li>Organising special events</li>
          <li>Training other people in community boating skills</li>
          <li>Organising the day-to-day running of the Trust by being a committee member</li>
          <li>The governance of the Trust by being a Trustee</li>
        </List>
      </Section>

      <Section>
        <SectionTitle>The benefits of joining our team...</SectionTitle>
        <List>
          <li>Good use of any spare time you have</li>
          <li>Learning new skills & having new experiences</li>
          <li>Making new friends</li>
          <li>Personal fulfilment</li>
          <li>Volunteering your time when it suits you</li>
          <li>Providing positive experiences for others</li>
          <li>Being a valued member of a friendly team</li>
          <li>Receiving nationally recognised NCBA qualifications for skippers & crew</li>
          <li>Using skills and interests you already have</li>
        </List>
      </Section>

      <Section>
        <Paragraph>
          We are always welcoming new volunteers. People who are interested are encouraged to go on a taster trip to experience our work first hand. If you are interested to find out more, contact:
        </Paragraph>
        <ContactInfo>
          <strong>Jennifer Christian</strong><br />
          Email: <a href="mailto:volunteer@truman-enterprise.ork.uk">volunteer@truman-enterprise.ork.uk</a><br />
          Tel: <a href="tel:07908084744">07908 084744</a>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>Support the Trust's work</SectionTitle>
        <List>
          <li>Become a volunteer</li>
          <li>Make a donation and fill in a gift aid form</li>
          <li>Sponsor a trip for a group you know or one suggested by us</li>
          <li>Recommend our trips to groups & families you know</li>
          <li>If you are taking part in a fund raising activity, choose Truman Enterprise Narrowboat Trust as your charity</li>
          <li>Leave a legacy to Truman Enterprise Narrowboat Trust in your will</li>
        </List>
        
        <ContactInfo>
          <strong>Contact our Treasurer:</strong><br />
          Chris Rogers<br />
          Email: <a href="mailto:chairman@truman-enterprise.org.uk">chairman@truman-enterprise.org.uk</a><br />
          Tel: <a href="tel:07763214524">07763 214524</a>
        </ContactInfo>
      </Section>
    </Container>
  );
};

export default Volunteers;