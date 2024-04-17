import React from 'react';
import { Container, Grid, Typography, TextField, FormControl, Button } from '@mui/material';
import login from '../assets/images/login-image.jpg';
import logo from '../assets/images/logo.png';
import Google from '../assets/images/google.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="signup">
      <Container maxWidth="lg" className='ps-0 pe-md-0'>
        <Grid container spacing={2} xs={{ alignItems: 'center' }}>
          <Grid item xs={6}>
            <div className="signup-img">
              <img src={login} alt='signup-image' />
            </div>
          </Grid>
          <Grid item xs={6} className='signup-content'>
            <div className="signup-content-item">
              <div className="signup-content-top">
                <Link to='/'>
                  <img src={logo} alt="logo" className='logo' />
                </Link>
                <Typography variant="h3" className='title text-secondary'>Welcome Back!</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
              </div>
              <div className='signup-content-form'>
                <FormControl fullWidth>
                  <div className='mb-4'>
                    <TextField id="" variant="outlined" className='form-control' placeholder="Enter your email here" fullWidth />
                  </div>
                  <div className='mb-4'>
                    <TextField id="" variant="outlined" className='form-control' placeholder="Enter your password here" fullWidth />
                    <div className='text-end mt-1'>
                      <Link to="/" className='text-accent'>Forgot Password</Link>
                    </div>
                  </div>

                  <div className='mb-4'>
                    <Button className=' btn btn-primary' fullWidth>Sign In</Button>
                  </div>
                  <div className='mb-4'>
                    <Button className=' btn btn-info' fullWidth><img
                      src={Google} alt='google' className="pe-3" />Sing in with Google</Button>
                  </div>
                  <div className='mb-4'>
                    <Typography>Don’t have an account. <Link to="/signup" className='text-accent'>Sign up </Link></Typography>
                  </div>
                </FormControl>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
