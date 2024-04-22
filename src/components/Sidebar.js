// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ScoreOutlinedIcon from '@mui/icons-material/ScoreOutlined';
import logo from "../assets/images/logo.png";

const drawerWidth = 240;
const closedDrawerWidth = 65;

const Sidebar = ({ isOpen }) => {
  const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardOutlinedIcon />, link: '/dashboard' },
    { text: 'OverBilling', icon: <SsidChartIcon />, link: '/overbilling' },
    { text: 'Shortage Claim', icon: <PieChartOutlineIcon />, link: '/shortage-claim' },
    { text: 'Financial Scorecard', icon: <ScoreOutlinedIcon />, link: '/financial-scorecard' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? drawerWidth : closedDrawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isOpen ? drawerWidth : closedDrawerWidth,
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
        },
      }}
      open={isOpen}
    >
      <List className="sidebar-list">
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: isOpen ? '70px' : '40px', transition: 'width 0.3s ease' }} />
          </Link>
        </div>
        {sidebarItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }} className="sidebar-list-item">
            <ListItemButton sx={{ minHeight: 48 }} component={Link} to={item.link}>
              <ListItemIcon className='sidebar-list-item-icon'>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  opacity: isOpen ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
