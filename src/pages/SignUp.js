import React from 'react';
import { Container,Grid, Box, Typography, TextField, FormControl, Button } from '@mui/material';
import logo from '../assets/images/logo.png';
import login from '../assets/images/login-image.jpg';
import Google from '../assets/images/google.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Box className="signup">
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center" xs={{ alignItems: 'center'}}>
          <Grid item>
            <div className="signup-img">
              <img src={login} alt='signup-image' />
            </div>
          </Grid>
          
          <Grid item className='signup-content'>
            <div className="signup-content-item">
              <div className="signup-content-top">
                <Link to='/'>
                  <img src={logo} alt="logo" className='logo' />
                </Link>
                <Typography variant="h3" className='title text-secondary'>Signup</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
              </div>

              <div className='signup-content-form'>
                <FormControl fullWidth>
                  <div className='mb-3'>
                    <TextField id="" variant="outlined" className='form-control' placeholder="Enter your full name here" fullWidth />
                  </div>
                  <div className='mb-3'>
                    <TextField id="" variant="outlined" className='form-control' placeholder="Enter your email here" fullWidth />
                  </div>
                  <div className='mb-3'>
                    <TextField id="" variant="outlined" className='form-control' placeholder="Enter your password here" fullWidth />
                  </div>
                  <div className='mb-3'>
                    <Button className=' btn btn-primary' fullWidth>Create Account</Button>
                  </div>
                  <div className='mb-3'>
                    <Button className=' btn btn-info' fullWidth><img
                      src={Google} alt='google' className="pe-3" />SignUp With Google</Button>
                  </div>
                  <div className='mb-3'>
                    <Typography>Already have a account? <Link to="/login" className='text-accent'>Log in</Link></Typography>
                  </div>
                </FormControl>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SignUp;
