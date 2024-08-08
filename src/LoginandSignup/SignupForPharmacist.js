import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupForPharmacist = () => {
  const [formData, setFormData] = useState({
    pharmacyName: '',
    pharmacyId: '',
    pincode: '',
    email: '',
    password: '',
    operatingHoursFrom: '',
    operatingHoursTo: '',
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
      if (!formData[field] && field !== 'operatingHoursFrom' && field !== 'operatingHoursTo') {
        errors[field] = 'This field is required';
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Display alert and navigate upon acceptance
      window.alert('Form submitted successfully');
      navigate('/login'); // Navigate to the login page
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
          <TextField
            label="Operating Hours From"
            name="operatingHoursFrom"
            variant="outlined"
            fullWidth
            value={formData.operatingHoursFrom}
            onChange={handleChange}
            placeholder="09:00:00.000000"
            error={!!formErrors.operatingHoursFrom}
            helperText={formErrors.operatingHoursFrom}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Operating Hours To"
            name="operatingHoursTo"
            variant="outlined"
            fullWidth
            value={formData.operatingHoursTo}
            onChange={handleChange}
            placeholder="18:00:00.000000"
            error={!!formErrors.operatingHoursTo}
            helperText={formErrors.operatingHoursTo}
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
