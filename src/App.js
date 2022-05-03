import "./App.css";
import Sidebar from "./components/Sidebar";
import Mainnav from "./components/Mainnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { HowMuch, HowToPay, HavAGo, BookYourTrip, Training } from "./pages/BookYourTrip";
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import LandingPage from "./pages/LandingPage";
import TermsAndCond from "./pages/TermsAndCond";
import Volunteers from './pages/Volunteers';
import OurHistory from './pages/OurHistory';
import { AboutUs, AboutTheTrust, BoatBrochure, DetailsAndDiagrams, AimsAndObjectives, MeetTheCrew, RiskAssesments, UsefulLinks } from "./pages/AboutUs";
import Footer from "./components/Footer";

/* why do are the below routes different although they come from same object(BookYourTrip)
 if I put them all in BookYourTrip, only 1/2 of them work,
 and when I put them in book-your-trip, the other 1/2 works?*/

function App() {
  return (
    <Router>
      <Sidebar />
      <Mainnav />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/BookYourTrip/BookYourTrip" exact element={<BookYourTrip />} />
        <Route path="/BookYourTrip/HowMuch" exact element={<HowMuch />} />
        <Route path="/BookYourTrip/HowToPay" exact element={<HowToPay />} />
        <Route path="/book-your-trip/HavAGo" exact element={<HavAGo />} />
        <Route path="/book-your-trip/Training" exact element={<Training />} />
        <Route path="/TermsAndCond" exact element={<TermsAndCond />} />
        <Route path="/AboutUs/AboutUs" exact element={<AboutUs />} />
        <Route path="/AboutUs/AboutTheTrust" exact element={<AboutTheTrust />} />
        <Route path="/Volunteers" exact element={<Volunteers />} />
        <Route path="/AboutUs/BoatBrochure" exact element={<BoatBrochure />} />
        <Route path="/AboutUs/DetailsAndDiagrams" exact element={<DetailsAndDiagrams />} />
        <Route path="/AboutUs/AimsAndObjectives" exact element={<AimsAndObjectives />} />
        <Route path="/AboutUs/OurHistory" exact element={<OurHistory />} />
        <Route path="/AboutUs/MeetTheCrew" exact element={<MeetTheCrew />} />
        <Route path="/AboutUs/RiskAssesments" exact element={<RiskAssesments />} />
        <Route path="/AboutUs/UsefulLinks" exact element={<UsefulLinks />} />
        <Route path="/Gallery" exact element={<Gallery />} />
        <Route path="/ContactUs" exact element={<ContactUs />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
