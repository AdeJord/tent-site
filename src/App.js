import "./App.css";
import React from  'react'
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Mainnav from "./components/Mainnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { BookYourTrip } from "./pages/BookYourTrip";
import HowToPay from './pages/HowToPay'
import HaveAGoDays from "./pages/HaveAGoDays"
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import CreateBooking from './pages/CreateBooking';
import TermsAndCond from "./pages/TermsAndCond";
import Volunteers from './pages/Volunteers';
import OurHistory from './pages/OurHistory';
import { AboutUs, DetailsAndDiagrams } from "./pages/AboutUs";
import TheEnterprise  from "./pages/TheEnterprise";
import RiskAssesments  from "./pages/RiskAssesments";
import Footer from "./components/Footer";
import CovidSafeCruising from "./pages/CovidSafeCruising";
import TrainingCourses from "./pages/TrainingCourses";
import AimsAndObjectives from "./pages/AimsAndObjectives"
import HowMuch from "./pages/HowMuch";
// import BookNow from "./pages/CreateBooking";
// import MeetTheCrew from "./pages/MeetTheCrew";
import UsefulLinks from "./pages/UsefulLinks";
import GroupLeaderPolicy from "./pages/GroupLeaderPolicy";
import { Container } from './ComponentStyles'
import AvailabilityCalendar from "./pages/AvailabilityCalendar";
import News from "./pages/News";
 
// const Container = styled.section`
//   display: flex;
//   flex-direction: column;
//   height: auto;
//   max-width: 100vw;
//   align-items: center;
//   background: #EDECE4;
//   // padding: 20px;
//   // @media (min-width: 768px) {
//   //   height: 62vh;
//   // }
// `;

/* why are the below routes different although they come from same object(BookYourTrip)
 if I put them all in BookYourTrip, only 1/2 of them work,
 and when I put them in book-your-trip, the other 1/2 works?*/


function App() {
  return (
<Container>
    <Router>
      <Sidebar />
      {/* <Mainnav /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home"  element={<Home />} />
        <Route path="/GroupLeaderPolicy"  element={<GroupLeaderPolicy />} />
        <Route path="/BookYourTrip/BookYourTrip"  element={<BookYourTrip />} />
        <Route path="/BookNow"  element={<AvailabilityCalendar />} />
        <Route path="/CreateBooking"  element={<CreateBooking />} />
        <Route path="/HowMuch"  element={<HowMuch />} />
        <Route path="/CovidSafeCruising"  element={<CovidSafeCruising />} />
        <Route path="/TrainingCourses"  element={<TrainingCourses />} />
        <Route path="/TheEnterprise"  element={<TheEnterprise />} />
        <Route path="/HowToPay"  element={<HowToPay />} />
        <Route path="/HaveAGoDays"  element={<HaveAGoDays />} />
        <Route path="/TermsAndCond"  element={<TermsAndCond />} />
        <Route path="/RiskAssesments"  element={<RiskAssesments />} />
        <Route path="/AboutUs/AboutUs"  element={<AboutUs />} />
        <Route path="/Volunteers"  element={<Volunteers />} />
        <Route path="/AboutUs/TheEnterprise"  element={<TheEnterprise />} />
        <Route path="/AboutUs/DetailsAndDiagrams"  element={<DetailsAndDiagrams />} />
        <Route path="/AimsAndObjectives"  element={<AimsAndObjectives />} />
        <Route path="/AboutUs/OurHistory"  element={<OurHistory />} />
        {/* <Route path="/MeetTheCrew"  element={<MeetTheCrew />} /> */}
        <Route path="/AboutUs/RiskAssesments"  element={<RiskAssesments />} />
        <Route path="/UsefulLinks"  element={<UsefulLinks />} />
        <Route path="/Gallery"  element={<Gallery />} />
        <Route path="/ContactUs"  element={<ContactUs />} />
        <Route path="/News"  element={<News />} />
      </Routes>
      <Footer />
    </Router>
    </Container>
  );
}

export default App;
