//************JOB**************Make it load on Overview instead of a blank page"**********




import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";
import Messages from "./pages/Messages";
import Support from "./pages/Support";
import Users from "./pages/overview/Users";
import Revenue from "./pages/overview/Revenue";
import Products from "./pages/Products";
import Messages1 from "./pages/messages/Messages1";
import Messages2 from "./pages/messages/Messages2";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<Home />} /> 
        <Route path="/overview" exact element={<Overview />} />
        <Route path="/overview/users" exact element={<Users />} />
        <Route path="/overview/revenue" exact element={<Revenue />} />
        <Route path="/reports" exact element={<Reports />} />
        <Route path="/reports/reports1" exact element={<ReportsOne />} />
        <Route path="/reports/reports2" exact element={<ReportsTwo />} />
        <Route path="/reports/reports3" exact element={<ReportsThree />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/messages" exact element={<Messages />} />
        <Route path="/messages/message1" exact element={<Messages1 />} />
        <Route path="/messages/message2" exact element={<Messages2 />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;
