import React, { useState } from 'react';
import { TextField, Button, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const SignupForPatient = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    gender: '',
    phone: '',
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
      <h1>Signup for Patient</h1>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
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
          <FormControl component="fieldset" error={!!formErrors.gender}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {formErrors.gender && <p className="signup-error">{formErrors.gender}</p>}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            name="phone"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
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

export default SignupForPatient;
