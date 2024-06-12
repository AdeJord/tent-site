// Importing React, styled-components, and other dependencies
import React from "react";
import styled from "styled-components";
import "../App.css";
import TopImage from "../images/TopImage.JPG";
import LadsOnLock from "../images/LadsOnLock.JPG";
import LondonChallenge from "../images/LondonChallenge.JPG";
import Symphony from "../images/Symphony.JPG";
import BottomImage from "../images/BottomImage.JPG";
import "@fontsource/roboto"; // Defaults to weight 400.
import { Container, Header } from "../ComponentStyles";

// Creating styled-components with responsive styles
const ImagesDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 80%; // Adjust width to fit within the container
  height: auto; // Maintain aspect ratio
  object-fit: cover; // Ensures the image covers the designated area, may crop if necessary

  &.spaced {
    margin-top: 20px; // Adding space between images
  }

  @media (max-width: 768px) {
    width: 100%; // Adjust width for smaller screens
  }
`;

const Section = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const OurHistory = () => {
  return (
    <Container>
      <Section>
        <Header style={{ paddingBottom: "20px" }}>HISTORY OF THE CHARITY</Header>
        <Text>
          In 1965, a group of dedicated youth leaders in Walsall raised funds to build a narrowboat for “the youth of the town”. Three years later, narrowboat HF Truman was launched, starting weekend trips for youngsters from youth clubs and schools. This was so successful that a second boat was soon added. Initially based in Peter Keays yard in Walsall, trips later moved to top lock Wolverhampton. Youth leaders and volunteers ran the trips under the management of a Senior Boat Warden paid by Walsall MBC, which also supported the project in many other ways. Gradually, the boats were replaced and updated, and the organization went from strength to strength. It became a registered charity called the HF Truman Narrowboat Trust in 1992. In 1981, the charity moved its base from Wolverhampton to Hatherton Marina in Calf Heath, where it remains to this day.
        </Text>
        <ImagesDiv>
          <Image src={TopImage} alt="Top Image" />
        </ImagesDiv>
        <Text>
          In 2005, the charity took on narrowboat Walsall Enterprise from Walsall MBC Social Services. This is a 70ft day trip boat with disabled access. Consequently, in 2006, the charity was renamed Truman Enterprise Narrowboat Trust. The youth boats continued to be busy with longer trips and challenges undertaken, for example, to Llangollen and London.
        </Text>
        <ImagesDiv>
          <Image src={LadsOnLock} alt="Lads on Lock" />
          <Image src={LondonChallenge} alt="London Challenge" className="spaced" />
        </ImagesDiv>
        <Text>
          Gradually, day trips flourished and improvements were made to the Walsall Enterprise. However, a big blow came in 2011 when Walsall MBC withdrew its funding due to general council cutbacks. At the same time, Walsall youth services funding was reduced, and demand for residential trips started to decline. The charity was run entirely by volunteers and was self-funding. Over time, it became impossible to justify the expense of running the residential boats, and they had to be gradually sold to maintain efficiency.
        </Text>
        <Text>
          In 2018, the charity celebrated 50 years of providing the people of the West Midlands with fun and new experiences on local inland waterways. Trips on the now renamed ‘Enterprise’ continued to flourish until 2020-21 when Covid severely limited the charity’s work. For the first time ever, no boat trip took place in 2020. However, the charity survived and has gradually built back up its activities and is once again flourishing thanks to the support of its many volunteers and passengers over many happy years. Long may this continue.
        </Text>
        <Header style={{ fontSize: "1.2em" }}>HISTORY OF THE BOAT</Header>
        <Text>
          In the early 1970s, a young man called Peter Le Marchant died. His sister Clare was looking for something to commemorate her brother’s life, and while on a narrowboat trip, she hit on the idea of building a boat for people with differing physical abilities. In 1977, the Peter Le Marchant Trust was set up on the River Soar in Leicestershire, and a boat was commissioned in 1978, built by the apprentices of Cammell Laird, Birkenhead. This boat was named Symphony and was 70ft long. Cammell Laird, known for building ocean-going liners and ships for the Royal Navy, built a number of narrowboats for various charities, a few of which are still in operation today.
        </Text>
        <ImagesDiv>
          <Image src={Symphony} alt="Symphony" />
        </ImagesDiv>
        <Text>
          At the time that she was built, Cammell Laird had also built two destroyers, believed to be the HMS Birmingham and HMS Coventry. The off-cuts from these destroyers were used to build Symphony, as was the wood and stainless steel used to fit her out. Consequently, Symphony had a few unusual features: a high and very large front with a railing around it, narrow and varying-width gunwales, and a heavy build weighing about 22 tons due to the thickness of the metal in various places. The kitchen units are made of stainless steel. The Peter Le Marchant Trust decided to part with Symphony and build a broad beam boat. Symphony was brought to Walsall MBC Social Services in 1981, refurbished, and renamed Walsall Enterprise by HRH the Duke of Gloucester. It was based on the Shropshire Union canal at Brewood to give the people of Walsall a day out in the countryside.
        </Text>
        <ImagesDiv>
          <Image src={BottomImage} alt="Bottom Image" />
        </ImagesDiv>
        <Text>
          Due to management problems, the Walsall Enterprise was transferred to the HF Truman Trust in 2005 and moved to where it is now at Hatherton Marina in Calf Heath. Walsall Council funded the boat up until 2011, but from then on, the Truman Enterprise Narrowboat Trust has been wholly supported by volunteers and her passengers. It was renamed Enterprise in 2020 and takes passengers from all over the West Midlands and further afield. Over the years, a lot of money has been spent on the boat, including a new engine, new passenger lift, new floor, new windows, re-plating of the hull, reconditioned central heating boiler, refurbished gas hob, new toilets, and a lick of paint here and there. So at 47 years old, the boat is still fulfilling its original purpose and giving much pleasure to all who travel on her.
        </Text>
      </Section>
    </Container>
  );
};

export default OurHistory;
