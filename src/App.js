import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import "./assets/css/style.css";
import OverBilling from './pages/overbilling/OverBilling';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Box className="main-wrapper">
        <Sidebar isOpen={isSidebarOpen} />
        <Box className="main-content" style={{ minHeight: 'calc(100vh - 64px)' }}> {/* Adjust height here */}
          <Header onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <Routes>
            <Route path="/overbilling" element={<OverBilling />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
