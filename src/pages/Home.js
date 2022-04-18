import React from "react";
import styled from "styled-components";
import NiceBoatPic from '../images/NiceBoatPic.jpg'
import Gerry from '../images/Gerry.jpg'
import { useMediaQuery } from 'react-responsive'

const Container = styled.section`
display: flex;
flex-direction: column;
height: 90%;
align-items: center;
padding: 20px;
overflow-y: scroll;
@media (min-width: 768px) {
  height:65vh;
} 
`

const ImgContainer = styled.div`
padding-left: 10%;
padding-right: 10%;
img src={NiceBoatPic} alt='Nice Boat Pic';

@media (max-width: 768px) {
  img src={Gerry} alt='Gerry'
}
`

const Image = () => (
  <div>
    <h1>Device Test!</h1>
    <useMediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
      <img src={NiceBoatPic} alt='Nice Boat Pic'/>
    </useMediaQuery>
    <useMediaQuery minResolution='2dppx'>
      <img src={Gerry} alt='Gerry'/>
    </useMediaQuery>
  </div>
)


const Home = () => {
  return (
    <Container>
      <ImgContainer>
      <img src={NiceBoatPic} alt='Nice Boat Pic' style={{ width: '100%', height: '100%' }} />
      </ImgContainer>
      <h3 style={{ padding: '20px' }}>Providing day trips for elderly, disabled,
        youth & community groups, and families on the Staffs and Worcester Canal.</h3>
      <p>
        Starting from Hatherton Marina (Near Cannock), we offer fully accessible day trips
        on the 'Enterprise' to either Autherley Junction (Near Oxley) or The Anchor Inn,
        (Coven) where you can enjoy some of the beautiful scenery of the Staffordshire and
        Worcester canal. Equipped with a lift and accessible toilet facilities we can take
        up to 2 wheelchair users and up to 10 other passengers (12 in total). With full use
        of our kitchen facilities feel free to make your own tea and coffee, (milk and sugar
        are provided). You can either bring your own sandwiches, order fish and chips, or have
        a drink and a meal at the pub. Our trips usually last between 4 and 8 hours.
        What time we leave and what time we return is up to you. Run entirley by volunteers,
        our only aim to give you an enjoyable and memorable day out on the canal.

        Starting from Hatherton Marina (Near Cannock), we offer fully accessible day trips
        on the 'Enterprise' to either Autherley Junction (Near Oxley) or The Anchor Inn,
        (Coven) where you can enjoy some of the beautiful scenery of the Staffordshire and
        Worcester canal. Equipped with a lift and accessible toilet facilities we can take
        up to 2 wheelchair users and up to 10 other passengers (12 in total). With full use
        of our kitchen facilities feel free to make your own tea and coffee, (milk and sugar
        are provided). You can either bring your own sandwiches, order fish and chips, or have
        a drink and a meal at the pub. Our trips usually last between 4 and 8 hours.
        What time we leave and what time we return is up to you. Run entirley by volunteers,
        our only aim to give you an enjoyable and memorable day out on the canal.

        
      </p>
    </Container>
  );
};

export default Home;
