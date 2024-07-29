import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SignupForPharmacist = () => {
  const [formData, setFormData] = useState({
    pharmacyName: '',
    pharmacyId: '',
    pincode: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
    }
  };

  return (
    <form className="signup-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
      <h1>Signup for Pharmacist</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Pharmacy Name"
            name="pharmacyName"
            variant="outlined"
            fullWidth
            value={formData.pharmacyName}
            onChange={handleChange}
            error={!!formErrors.pharmacyName}
            helperText={formErrors.pharmacyName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Pharmacy ID"
            name="pharmacyId"
            variant="outlined"
            fullWidth
            value={formData.pharmacyId}
            onChange={handleChange}
            error={!!formErrors.pharmacyId}
            helperText={formErrors.pharmacyId}
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignupForPharmacist;
