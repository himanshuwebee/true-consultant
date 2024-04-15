import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Overbilling from "./components/Overbilling";
import Shortage from "./components/Shortage";
import Financial from "./components/FinancialScoreCard";
import Ops from "./components/Ops";
import Coming from "./components/comingSoon";
import Home from "./components/Home";
import PriceClaim from "./components/PriceClaim";
import Invoice from "./components/Invoice";
import UploadLog from "./components/UploadLog";
import Client from "./components/Client";
import User from "./components/User";
import Group from "./components/Group";
import ManageUser from "./components/ManageUser";
import JobStatus from "./components/JobStatus";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Test from "./components/Test";


function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Overbilling" element={<Overbilling />} />
            <Route path="/Shortage" element={<Shortage />} />
            <Route path="/Ops" element={<Ops />} />
            <Route path="/Financial" element={<Financial />} />
            <Route path="/PriceClaim" element={<PriceClaim />} />
            <Route path="/Invoice" element={<Invoice />} />
            <Route path="/UploadLog" element={<UploadLog />} />
            <Route path="/JobStatus" element={<JobStatus />} />
            <Route path="/Client" element={<Client />} />
            <Route path="/User" element={<User />} />
            <Route path="/Group" element={<Group />} />
            <Route path="/ManageUser" element={<ManageUser />} />
            <Route path="/Coming" element={<Coming />} />
            <Route path="/Test" element={<Test />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
