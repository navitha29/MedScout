import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupForPatient = () => {
  const [formData, setFormData] = useState({
    username: '',
    dob: '',
    address: '',
    mobileNumber: '',
    email: '',
    password: '',
    pincode: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        errors[field] = 'This field is required';
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/users/create', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        // Display alert and navigate upon acceptance
        window.alert('Form submitted successfully');
        navigate('/login'); // Navigate to the login page
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };

  return (
    <form className="signup-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <h1>Signup for Patient</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="username"
            variant="outlined"
            fullWidth
            value={formData.username}
            onChange={handleChange}
            error={!!formErrors.username}
            helperText={formErrors.username}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={formData.dob}
            onChange={handleChange}
            error={!!formErrors.dob}
            helperText={formErrors.dob}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            fullWidth
            value={formData.address}
            onChange={handleChange}
            error={!!formErrors.address}
            helperText={formErrors.address}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            name="mobileNumber"
            variant="outlined"
            fullWidth
            value={formData.mobileNumber}
            onChange={handleChange}
            error={!!formErrors.mobileNumber}
            helperText={formErrors.mobileNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Pincode"
            name="pincode"
            variant="outlined"
            fullWidth
            value={formData.pincode}
            onChange={handleChange}
            error={!!formErrors.pincode}
            helperText={formErrors.pincode}
          />
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

export default SignupForPatient;
