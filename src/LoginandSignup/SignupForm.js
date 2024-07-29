import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SignupForm = () => {
  return (
    <form className="form" noValidate autoComplete="off">
      <h1>Create Account</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Name" name="name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" name="email" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Phone" name="phone" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address" name="address" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" name="password" type="password" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForm;
