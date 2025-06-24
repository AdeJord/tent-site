import React from 'react';
import styled from 'styled-components';

// Import images directly - this is the approach to use with React and webpack/bundlers
import TopImage from '../images/TopImage.JPG';
import LadsOnLock from '../images/LadsOnLock.JPG';
import LondonChallenge from '../images/LondonChallenge.JPG';
import Symphony from '../images/Symphony.JPG';
import BottomImage from '../images/BottomImage.JPG';

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 40px 0;
`;

const Header = styled.h2`
  font-size: 1.8em;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
`;

const SubHeader = styled.h3`
  font-size: 1.2em;
  color: #333;
  margin-top: 30px;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #444;
  margin-bottom: 20px;
`;

const ImagesDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0 30px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &.spaced {
    margin-left: 10px;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    &.spaced {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

const OurHistory = () => {
  return (
    <Container>
      <Section>
        <Header>HISTORY OF THE CHARITY</Header>
        <Text>
          In 1965 a group of very dedicated and enlightened youth leaders in
          Walsall raised funds to build a narrowboat for "the youth of the
          town". 3 years later narrowboat HF Truman was launched and weekend
          trips started for youngsters from youth clubs and schools. This was so
          successful a second boat was soon added. At this time the boats were
          based in Peter Keays yard in Walsall where all trips started from.
          They later moved to top lock Wolverhampton. Youth leaders and
          volunteers ran the trips under the management of a Senior Boat Warden
          who was paid by Walsall MBC, who also supported the project in many
          other ways. Gradually the boats were replaced and updated and the
          organisation went from strength to strength. It became a registered
          charity called the HF Truman Narrowboat Trust in 1992. In 1981 the
          charity moved its base from Wolverhampton to Hatherton Marina in Calf
          Heath where it remains to this day.
        </Text>
        <ImagesDiv>
          <Image src={TopImage} alt="Historical photo of the narrowboat" />
        </ImagesDiv>

        <Text>
          2005 began a period of change. The charity took on narrowboat Walsall
          Enterprise from Walsall MBC Social Services. This is a 70ft day trip
          boat with disabled access. Consequently in 2006 the charity was
          renamed Truman Enterprise Narrowboat Trust. The youth boats continued
          to be busy with longer trips and challenges undertaken for example to
          Llangollen and London.
        </Text>
        <ImagesDiv>
          <Image src={LadsOnLock} alt="Young people on a canal lock" />
          <Image src={LondonChallenge} alt="London Challenge trip" className="spaced" />
        </ImagesDiv>
        <Text>
          Gradually day trips flourished and improvements were made to the
          Walsall Enterprise. However a big blow came in 2011 when Walsall MBC
          withdrew its funding due to general council cutbacks. At the same time
          Walsall youth services funding was reduced and demand for residential
          trips started to decline. The charity was run entirely by volunteers
          and was self-funding. Over time it became impossible to justify the
          expense of running the residential boats and they had to be gradually
          sold to maintain efficiency.
        </Text>
        <Text>
          In 2018 the charity celebrated 50 years of providing the people of the
          West Midlands with fun and new experiences on local inland waterways.
          Trips on the now renamed 'Enterprise' continued to flourish until
          2020-21 when Covid severely limited the charity's work. For the first
          time ever, no boat trip took place in 2020. However the charity
          survived and has gradually built back up its activities and is once
          again flourishing thanks to the support of its many volunteers and
          passengers over many happy years. Long may this continue.
        </Text>

        <SubHeader>HISTORY OF THE BOAT</SubHeader>
        <Text>
          In the early 1970s, a young man called Peter Le Marchant died. His
          sister Clare was looking for something to commemorate her brother's
          life, and while on a narrowboat trip, she hit on the idea of building
          a boat for people with differing physical abilities. In 1977, the
          Peter Le Marchant Trust was set up on the River Soar in
          Leicestershire, and a boat was commissioned in 1978, built by the
          apprentices of Cammell Laird, Birkenhead. This boat was named Symphony
          and was 70ft long. Cammell Laird, known for building ocean-going
          liners and ships for the Royal Navy, built a number of narrowboats for
          various charities, a few of which are still in operation today.
        </Text>
        <ImagesDiv>
          <Image src={Symphony} alt="Narrowboat Symphony" />
        </ImagesDiv>
        <Text>
          At the time that she was built, Cammell Laird had also built two
          destroyers believed to be the HMS Birmingham and HMS Coventry. We
          understand that the off-cuts from these destroyers were used to build
          Symphony as was the wood and stainless steel used to fit her out.
          Consequently Symphony had a few unusual features. It has a high and
          very large front with a railing around it. The boat appears to have
          been built in 3 sections and 2 joins are clearly visible on the
          outside. The gunwales are very narrow and varying in width. The boat
          is very heavy, weighing about 22 tons due to the thickness of the
          metal in various places. The shape of the hull at the stern (the swim)
          only allows for a small propeller, making steering difficult and
          reversing impossible. The kitchen units are made of stainless steel.
          The Peter Le Marchant Trust decided to part with Symphony and build a
          broad beam boat. Symphony was brought to Walsall MBC Social Services
          in 1981, refurbished and renamed Walsall Enterprise by HRH the Duke of
          Gloucester. It was based on the Shropshire Union canal at Brewood to
          give the people of Walsall a day out in the countryside.
        </Text>
        <ImagesDiv>
          <Image src={BottomImage} alt="The Enterprise narrowboat" />
        </ImagesDiv>
        <Text>
          Due to management problems, the Walsall Enterprise was transferred to
          the HF Truman Trust in 2005 and moved to where it is now at Hatherton
          Marina in Calf Heath. Walsall Council funded the boat up until 2011,
          but from then on, the Truman Enterprise Narrowboat Trust has been
          wholly supported by volunteers and her passengers. It was renamed
          Enterprise in 2020 and takes passengers from all over the West
          Midlands and further afield. Over the years, a lot of money has been
          spent on the boat, including a new engine, new passenger lift, new
          floor, new windows, re-plating of the hull, reconditioned central
          heating boiler, refurbished gas hob, new toilets, and a lick of paint
          here and there. So at 47 years old, the boat is still fulfilling its
          original purpose and giving much pleasure to all who travel on her.
        </Text>
      </Section>
    </Container>
  );
};

export default OurHistory;