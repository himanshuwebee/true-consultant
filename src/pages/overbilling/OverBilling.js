import React from 'react'
import { Grid, Box, Container, Breadcrumbs,Typography} from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import man from "../../assets/images/overbilling.png";
import { Link } from 'react-router-dom';


const OverBilling = () => {
  return (
   <Box className="overbilling">
      <Container maxWidth="xxl">
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            to="/"
          >
            <DashboardOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Dashboard
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            href="/overbilling"
          >
            OverBilling
          </Link>
        </Breadcrumbs>
          </Grid>
        
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Box className="overbilling-header">
              <Grid  container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="h4">Excess Coop Billing</Typography>
                </Grid>
                <Grid item xs={6} className="text-end">
                  <img src={man} alt="man-laptop" className='overbilling-header-image' />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        
        </Grid>
        
      </Container>
   </Box>
  )
}

export default OverBilling;
