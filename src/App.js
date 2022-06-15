import "./App.css";

import Sidebar from "./components/Sidebar";
import Mainnav from "./components/Mainnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { BookYourTrip } from "./pages/BookYourTrip";
import HowToPay from './pages/HowToPay'
import HaveAGoDays from "./pages/HaveAGoDays"
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import LandingPage from "./pages/LandingPage";
import TermsAndCond from "./pages/TermsAndCond";
import Volunteers from './pages/Volunteers';
import OurHistory from './pages/OurHistory';
import { AboutUs, TheEnterprise, DetailsAndDiagrams, RiskAssesments, UsefulLinks } from "./pages/AboutUs";
import Footer from "./components/Footer";
import CovidSafeCruising from "./pages/CovidSafeCruising";
import TrainingCourses from "./pages/TrainingCourses";
import AimsAndObjectives from "./pages/AimsAndObjectives"
import HowMuch from "./pages/HowMuch";
import BookNow from "./pages/BookNow";
import MeetTheCrew from "./pages/MeetTheCrew";

/* why do are the below routes different although they come from same object(BookYourTrip)
 if I put them all in BookYourTrip, only 1/2 of them work,
 and when I put them in book-your-trip, the other 1/2 works?*/

function App() {
  return (

    <Router>
      <Sidebar />
      {/* <Mainnav /> */}
      <Routes>
        <work-on-UI
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/BookYourTrip/BookYourTrip" exact element={<BookYourTrip />} />
        <Route path="/BookNow" exact element={<BookNow />} />
        <Route path="/HowMuch" exact element={<HowMuch />} />
        <Route path="/CovidSafeCruising" exact element={<CovidSafeCruising />} />
        <Route path="/TrainingCourses" exact element={<TrainingCourses />} />
        <Route path="/HowToPay" exact element={<HowToPay />} />
        <Route path="/HaveAGoDays" exact element={<HaveAGoDays />} />
        <Route path="/TermsAndCond" exact element={<TermsAndCond />} />
        <Route path="/AboutUs/AboutUs" exact element={<AboutUs />} />
        <Route path="/Volunteers" exact element={<Volunteers />} />
        <Route path="/AboutUs/TheEnterprise" exact element={<TheEnterprise />} />
        <Route path="/AboutUs/DetailsAndDiagrams" exact element={<DetailsAndDiagrams />} />
        <Route path="/AimsAndObjectives" exact element={<AimsAndObjectives />} />
        <Route path="/AboutUs/OurHistory" exact element={<OurHistory />} />
        <Route path="/MeetTheCrew" exact element={<MeetTheCrew />} />
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
