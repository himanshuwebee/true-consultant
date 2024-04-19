import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import logoOpen from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import logoClosed from '../assets/images/logo.png';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import ScoreOutlinedIcon from '@mui/icons-material/ScoreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Grid, FormControl, Select, MenuItem, Box, Stack } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: 65,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme, open }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,

  transition: 'width 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #ccc',
  width: 'calc(100% - 65px)', 
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const LogoClosed = styled('img')(({ open }) => ({
  width: open ? '70px' : '36px', 
}));
const SelectClosed = styled(Select)(({ open }) => ({
  width: open ? '250px' : '300px',
}));
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const iconArray = [<DashboardOutlinedIcon />, <SsidChartIcon />, <PieChartOutlineIcon />, <ScoreOutlinedIcon />];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label={open ? "close drawer" : "open drawer"}
            onClick={handleDrawerToggle}
            edge="start" className='nav-header-icon'
          >
            <MenuIcon />
          </IconButton>
          <Grid container rowSpacing={2}>
            <Grid item xs={4} className="ps-5">
              <FormControl>
              <SelectClosed  value={10} displayEmpty className='form-control'>

                  <MenuItem value={10}><PersonOutlineOutlinedIcon className='icons' />  US Demo Account</MenuItem>
                  <MenuItem value={20}><PersonOutlineOutlinedIcon className='icons' />  US Demo Account</MenuItem>
                  <MenuItem value={30}><PersonOutlineOutlinedIcon className='icons' />  US Demo Account</MenuItem>
                </SelectClosed>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl>
                <Select value={10} displayEmpty className='form-control form-select'>
                  <MenuItem value={10} >USD</MenuItem>
                  <MenuItem value={20} >USD</MenuItem>
                  <MenuItem value={30} >USD</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Box className="nav-header-right">
                <Stack direction="row" spacing={2}>
                  <MenuItem><EmailOutlinedIcon /></MenuItem>
                  <MenuItem><NotificationsNoneOutlinedIcon /></MenuItem>
                  <MenuItem><Person2OutlinedIcon /></MenuItem>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          className='nav-header-left' >
          <LogoClosed src={open ? logoOpen : logoClosed} alt='Logo' className='logo' open={open} />
        </DrawerHeader>
        <Divider />
        <List className='sidebar-list'>
          {[
            { text: 'Dashboard', icon: <DashboardOutlinedIcon /> },
            { text: 'OverBilling', icon: <SsidChartIcon /> },
            { text: 'Shortage Claim', icon: <PieChartOutlineIcon /> },
            { text: 'Financial Scorecard', icon: <ScoreOutlinedIcon /> },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }} className='sidebar-list-item'>
            <Link
  to={`/${item.text.toLowerCase().replace(' ', '-')}`}
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <ListItemButton
    sx={{
      minHeight: 48,
      justifyContent: open ? 'initial' : 'center',
      px: 2.5,
    }}
  >
    <ListItemIcon
      className='sidebar-list-icon'
      sx={{
        minWidth: 0,
        mr: open ? 3 : 'auto',
        justifyContent: 'center',
      }}
    >
      {item.icon}
    </ListItemIcon>
    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
  </ListItemButton>
</Link>

            </ListItem>
          ))}
        </List>


      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader open={open} />
      </Box>
    </Box>

  );
}
