import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Select, MenuItem, Stack, Avatar, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import pic from '../assets/images/pic.jpg';

const drawerWidth = 240;

const Header = ({ onMenuClick, isSidebarOpen }) => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const headerStyle = {
    width: isSidebarOpen ? '100%' : '100%',
    transition: 'width 0.3s ease',
    height: '64px',
  };

  return (
    <AppBar position='sticky'  style={headerStyle} className="header">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <TextField
          id="search"
          variant="outlined"
          size="small"
          sx={{ mr: 2 }}
          InputProps={{
            startAdornment: (
              <SearchOutlinedIcon />
            ),
          }}
          className="form-control-search"
        />
        <Select
          id="theme-select"
          value={theme}
          onChange={handleThemeChange}
          sx={{ mr: 2 }}
        >
          <MenuItem value="light">USD</MenuItem>
          <MenuItem value="dark">USD</MenuItem>
          <MenuItem value="dark">USD</MenuItem>
          <MenuItem value="dark">USD</MenuItem>
          <MenuItem value="dark">USD</MenuItem>
          <MenuItem value="dark">USD</MenuItem>
        </Select>
        <Stack direction="row" spacing={4} sx={{ ml: 'auto' }}>
          <EmailOutlinedIcon />
          <NotificationsNoneOutlinedIcon />
          <Avatar alt="Remy Sharp" src={pic} sx={{ width: 24, height: 24 }} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
