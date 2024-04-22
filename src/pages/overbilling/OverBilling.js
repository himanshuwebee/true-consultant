import React from 'react';
import { Grid, Box, Container, Breadcrumbs, Typography, Card, CardContent, Stack,Button,Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import man from "../../assets/images/overbilling.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Link } from 'react-router-dom';
import piggy from '../../assets/images/1.gif';
import AreaGraph from '../../components/Graph/Area';

const OverBilling = () => {
  return (
    <Box className="overbilling">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Breadcrumbs aria-label="breadcrumb" className='breadcrumb'>
              <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                to="/"
              >
                <DashboardOutlinedIcon sx={{ mr: 0.5 }} />
                Dashboard
              </Link>
              <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                className="active"
                href="/overbilling"
              >
                OverBilling
              </Link>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <Box className="overbilling-header">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h5">Excess Coop Billing</Typography>
            </Grid>
            <Grid item xs={6} className="text-end">
              <img src={man} alt="man-laptop" className='overbilling-header-image' />
            </Grid>
          </Grid>
        </Box>
        <Box marginTop={3}>
          <Grid container spacing={2} >
            <Grid item xs={8}>
              <Stack   direction={{ xs: 'column', sm: 'row' }} spacing={2} className="mb-3">
                <Card className='card'>
                  <CardContent className="pb-0 card-content">
                    <Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
                      <Box>
                        <Typography variant='h5' fontSize="16px" className='text-accent' marginBottom={1}>Finding Amount</Typography>
                        <Typography variant='body2' className='text-accent'><b>$ 98442</b></Typography>
                      </Box>
                    </Stack>
                    <Stack direction='row' spacing={4} useFlexGap  justifyContent="flex-end" alignItems="flex-end">
                      <Box>
                         <img src={piggy} alt='piggy' className='card-img'/>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
                <Card className='card'>
                  <CardContent className="pb-0 card-content">
                    <Stack direction='row' spacing={3} useFlexGap justifyContent="space-between">
                      <Box>
                        <Typography variant='h5' fontSize="16px" className='text-primary' marginBottom={1}>Yearly Trending</Typography>
                        <Typography variant='h6' className='text-primary'><b>2024</b></Typography>
                        <Typography variant='body2' className='text-dark' marginBottom={1}>$ 280,966</Typography>
                        
                      </Box>
                      <Box>
                        <Button size="small" className='btn-sm' fullWidth>View Trends <ChevronRightIcon /></Button>
                      </Box>
                    </Stack>
                    <Stack direction='row' spacing={4} useFlexGap marginTop={1}>
                          <Box>
                            <Typography variant='body1' className='text-accent'><b>2022</b></Typography>
                            <Typography variant='body2' className='text-dark' >$ 1,280,966.35</Typography>
                          </Box>
                          <Box>
                            <Typography variant='body1' className='text-accent'><b>2023</b></Typography>
                            <Typography variant='body2' className='text-success'>$ 1,680,966.35</Typography>
                          </Box>
                      </Stack>
                  </CardContent>
                </Card>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }}spacing={2}>
                <Card className='card'>
                  <CardContent className="pb-0 card-content">
                    <Stack direction='row' spacing={2} useFlexGap justifyContent="space-between">
                      <Box>
                        <Typography variant='h5' fontSize="16px" className='text-primary' marginBottom={1}>Disputed Amount</Typography>
                        <Typography variant='body2' className='text-primary' marginBottom={1}><b>$ 4,942,234.43</b></Typography>
                        <Typography variant='body2' className='text-dark'>View all raised disputes till date</Typography>
                      </Box>
                      <Box>
                        <Button size="small" className='btn-sm' fullWidth>View Details <ChevronRightIcon /></Button>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
                <Card className='card'>
                  <CardContent className="pb-0 card-content">
                    <Stack direction='row' spacing={3} useFlexGap justifyContent="space-between">
                      <Box>
                        <Typography variant='h5' fontSize="16px" className='text-success' marginBottom={1}>Disputed Amount</Typography>
                        <Typography variant='body2' className='text-success' marginBottom={1}><b>$ 4,942,234.43</b></Typography>
                      </Box>
                    </Stack>
                    <Stack direction='row' spacing={4} useFlexGap  justifyContent="flex-end" alignItems="flex-end">
                      < Box>
                      <AreaGraph />
                      </Box>
                    </Stack>
                    
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
         
            <Grid item xs={4}>
              <Card className='card'>
                  <CardContent className="pb-0 card-content">
                    <Stack direction='row' spacing={3} useFlexGap justifyContent="space-between">
                      <Box>
                        <Typography variant='h6' className='text-secondary' marginBottom={1}>Impact Overview</Typography>
                        <Typography variant='body2' className='text-accent' marginBottom={1}>Recouped Amount</Typography>
                        <Typography variant='body2' className='text-accent' marginBottom={1}><b>$ 89548</b></Typography>
                      </Box>
                      <Box>
                      <div style={{ width: '70px', height: '70px' }}>
                        <svg className="CircularProgressbar" viewBox="0 0 100 100" data-test-id="CircularProgressbar">
                         <path className="CircularProgressbar-trail" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" strokeWidth="8" fillOpacity="0" style={{ stroke: 'rgba(255, 135, 31,0.1)', strokeLinecap: 'round', transform: 'rotate(0.7turn)', transformOrigin: 'center center', strokeDasharray: '289.027px, 289.027px', strokeDashoffset: '0px' }}></path>
                         <path className="CircularProgressbar-path" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" strokeWidth="8" fillOpacity="0" style={{ stroke: 'rgb(255, 135, 31)', strokeLinecap: 'round', transform: 'rotate(0.7turn)', transformOrigin: 'center center', transitionDuration: '0.5s', strokeDasharray: '289.027px, 289.027px', strokeDashoffset: '65.031px' }}></path>
                         <text className="CircularProgressbar-text" x="50" y="53" textAnchor="middle" style={{ fill: 'rgb(255, 135, 31)', fontSize: '18px' }}>77.5</text>
                       </svg>
                      </div>
                      </Box>
                    </Stack>
                    <Stack direction='column'marginTop={3}>
                      <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between" className='mb-3'>
                        <Stack direction='row' spacing={1} alignItems="center">
                          <Avatar className='bg-success' sx={{ width: 30, height: 30 }}>
                            <AccessTimeOutlinedIcon />
                          </Avatar>
                          <Box>
                            <Typography variant='h6' className='card-text text-dark'>Hour Saved</Typography>
                          </Box>
                        </Stack>
                        <Typography  variant='h6' className='card-text text-dark'>18</Typography>
                      </Stack>
                      <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between" className='mb-3'>
                        <Stack direction='row'spacing={1} alignItems="center">
                          <Avatar className='bg-accent' sx={{ width: 30, height: 30 }}>
                            <BusinessCenterOutlinedIcon />
                          </Avatar>
                          <Box>
                            <Typography variant='h6' className='card-text text-dark'>Hour Saved</Typography>
                          </Box>
                        </Stack>
                        <Typography  variant='h6' className='card-text text-dark'>18</Typography>
                      </Stack>
                      <Stack direction='row'spacing={4} alignItems="center" justifyContent="space-between" className='mb-3'>
                        <Stack direction='row'spacing={1} alignItems="center">
                          <Avatar className='bg-primary' sx={{ width: 30, height: 30 }}>
                            <AttachMoneyOutlinedIcon />
                          </Avatar>
                          <Box>
                            <Typography variant='h6' className='card-text text-dark'>Money Saved</Typography>
                          </Box>
                        </Stack>
                        <Typography  variant='h6' className='card-text text-dark'>18</Typography>
                      </Stack>       
                    </Stack>    
                            
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Box>
        <Box marginTop={2}>
          <Grid container spacing={2} >
            <Grid item xs={6}>
                <Card className='card'>
                  <CardContent className="pb-0 card-content">
                     <Typography variant='h6' className='card-header'>Granular Analysis</Typography>
                           <Table className='table'>
                              <TableHead className='bg-primary text-white'>
                                <TableRow>
                                 <TableCell className='text-white'>Sub-type</TableCell>
                                 <TableCell className='text-white'>Findings $</TableCell>
                                 <TableCell className='text-white'>Prior Adjustments $</TableCell>
                                 <TableCell className='text-white'>Net Off</TableCell>
                                </TableRow>
                              </TableHead>
                               <TableBody>
                                  <TableRow>
                                   <TableCell>Duplicate Freight</TableCell>
                                   <TableCell>362,356.00</TableCell>
                                   <TableCell>65,231.00</TableCell>
                                   <TableCell>6547.25</TableCell>
                                  </TableRow>
                                  <TableRow className='bg-info'>
                                   <TableCell>Duplicate Freight</TableCell>
                                   <TableCell>362,356.00</TableCell>
                                   <TableCell>65,231.00</TableCell>
                                   <TableCell>6547.25</TableCell>
                                  </TableRow>
                                  <TableRow>
                                   <TableCell>Duplicate Freight</TableCell>
                                   <TableCell>362,356.00</TableCell>
                                   <TableCell>65,231.00</TableCell>
                                   <TableCell>6547.25</TableCell>
                                  </TableRow>
                                  <TableRow className='bg-info'>
                                   <TableCell>Duplicate Freight</TableCell>
                                   <TableCell>362,356.00</TableCell>
                                   <TableCell>65,231.00</TableCell>
                                   <TableCell>6547.25</TableCell>
                                  </TableRow>
                                </TableBody>
                            </Table>
                  </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
            <Card className='card'>
                  <CardContent className="pb-0 card-content">
                     <Typography variant='h6' className='card-header'>Win Rate</Typography>
                           <Table className='table'>
                              <TableHead className='bg-primary text-white'>
                                <TableRow>
                                 <TableCell className='text-white'>Sub-type</TableCell>
                                 <TableCell className='text-white'>Findings $</TableCell>
                                 <TableCell className='text-white'>Prior Adjustments $</TableCell>
                                 <TableCell className='text-white'>Net Off</TableCell>
                                </TableRow>
                              </TableHead>
                               <TableBody>
                                  <TableRow>
                                   <TableCell>Duplicate Freight</TableCell>
                                   <TableCell>362,356.00</TableCell>
                                   <TableCell>65,231.00</TableCell>
                                   <TableCell>6547.25</TableCell>
                                  </TableRow>
                                  <TableRow className='bg-info'>
                                   <TableCell>Duplicate Freight</TableCell>
                                   <TableCell>362,356.00</TableCell>
                                   <TableCell>65,231.00</TableCell>
                                   <TableCell>6547.25</TableCell>
                                  </TableRow>
                                  <TableRow>
                                   <TableCell>Duplicate Freight</TableCell>
                                   <TableCell>362,356.00</TableCell>
                                   <TableCell>65,231.00</TableCell>
                                   <TableCell>6547.25</TableCell>
                                  </TableRow>
                                  <TableRow className='bg-info'>
                                   <TableCell>Duplicate Freight</TableCell>
                                   <TableCell>362,356.00</TableCell>
                                   <TableCell>65,231.00</TableCell>
                                   <TableCell>6547.25</TableCell>
                                  </TableRow>
                                </TableBody>
                            </Table>
                  </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  ); 
}

export default OverBilling;
