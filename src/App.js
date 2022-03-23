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

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" exact component={Overview} />
        <Route path="/overview/users" exact component={Users} />
        <Route path="/overview/revenue" exact component={Revenue} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/products" exact component={Products} />
        <Route path="/team" exact component={Team} />
        <Route path="/messages" exact component={Messages} />
        <Route path="/messages/message1" exact component={Messages1} />
        <Route path="/messages/message2" exact component={Messages2} />
        <Route path="/support" component={Support} />
      </Routes>
    </Router>
  );
}

export default App;
