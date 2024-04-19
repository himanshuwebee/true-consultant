import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/assets/css/style.css";
import Sidebar from "./components/Sidebar";
import Financial from "./components/FinancialScoreCard";
import OpsChargeback from "./pages/OpsChargeback";
import CommingSoon from "./pages/CommingSoon";
import Home from "./pages/Home";
import PriceClaim from "./pages/PriceClaim";
import InvoiceReconciliation from "./pages/InvoiceReconciliation";
import UploadLog from "./components/UploadLog";
import Client from "./components/Client";
import User from "./components/User";
import Group from "./components/Group";
import ManageUser from "./pages/ManageUser";
import JobStatus from "./components/JobStatus";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Test from "./components/Test";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import OverBilling from "./pages/overbilling/OverBilling";


function App() {
  const sidebarWidth = 240; 
  return (
    <Router>
    <div className="App" style={{ display: "flex" }}>
      <Sidebar />
      <div className="content" style={{ width: `calc(100% - ${sidebarWidth}px)` }}>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/overbilling" element={<OverBilling />} />
          <Route path="/Ops" element={<OpsChargeback />} />
          <Route path="/Financial" element={<Financial />} />
          <Route path="/PriceClaim" element={<PriceClaim />} />
          <Route path="/Invoice" element={<InvoiceReconciliation />} />
          <Route path="/UploadLog" element={<UploadLog />} />
          <Route path="/JobStatus" element={<JobStatus />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/User" element={<User />} />
          <Route path="/Group" element={<Group />} />
          <Route path="/ManageUser" element={<ManageUser />} />
          <Route path="/Coming" element={<CommingSoon />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

const SignUpWithoutSidebar = () => {
  return <SignUp />;
};
const LoginWithoutSidebar = () => {
  return <Login />;
};
export default App;
