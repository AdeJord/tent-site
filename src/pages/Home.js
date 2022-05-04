import React from "react";
import styled from "styled-components";
import NiceBoatPic from '../images/NiceBoatPic.jpg';
import "@fontsource/roboto"; // Defaults to weight 400.

const Container = styled.section`
display: flex;

flex-direction: column;
width: 100%:
height: auto;
align-items: center;
padding: 0px;
overflow-y: scroll;
  height:70vh;

`

const ImgContainer = styled.div`
width: 100vw;
height: 100vh;

`

// const Image = () => (
//   <div>
//     <h1>Device Test!</h1>
//     <useMediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
//       <img src={NiceBoatPic} alt='Nice Boat Pic'/>
//     </useMediaQuery>
//     <useMediaQuery minResolution='2dppx'>
//       <img src={Gerry} alt='Gerry'/>
//     </useMediaQuery>
//   </div>
// )


const Home = () => {
  return (
    <Container>
      <ImgContainer>
      <img src={NiceBoatPic} style={{width: "100%", height:"100%"}}  alt='Nice Boat Pic'  />
      </ImgContainer>
      <h3 style={{ padding: '15px', textAlign: 'center' }}>Providing day trips for elderly, disabled,
        youth & community groups, and families on the Staffs and Worcester Canal.</h3>
        <hr style={{ width: '90vw'}}/>
      <p style={{ padding: '20px'}}>
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
