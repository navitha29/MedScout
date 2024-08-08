import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [isPatient, setIsPatient] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    pharmacyName: '',
    pharmacyId: '',
    pincode: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsPatient(!isPatient);
    setFormData({
      email: '',
      password: '',
      pharmacyName: '',
      pharmacyId: '',
      pincode: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const endpoint = isPatient
      ? 'http://localhost:8080/api/pharmacies'
      : 'http://localhost:8080/api/users/create';

    const data = isPatient
      ? { email: formData.email, password: formData.password }
      : {
          email: formData.email,
          password: formData.password,
          pharmacyName: formData.pharmacyName,
          pharmacyId: formData.pharmacyId,
          pincode: formData.pincode,
        };

    try {
      const response = await axios.post(endpoint, data);
      console.log('Signup successful', response.data);
      navigate('/login'); // Redirect to the login form
    } catch (error) {
      if (error.response) {
        console.error('Error signing up:', error.response.data);
        setError(error.response.data.message || 'Signup failed');
      } else {
        console.error('Error signing up:', error);
        setError('Signup failed');
      }
    }
  };

  return (
    <div className={`signup-container ${isPatient ? '' : 'signup-right-panel-active'}`}>
      <div className="signup-form-container signup-sign-in-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h1 className="signup-h1">Sign up as Patient</h1>
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button className="signup-button" type="submit">Sign Up</button>
        </form>
      </div>
      <div className="signup-form-container signup-sign-up-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h1 className="signup-h1">Sign up as Pharmacist</h1>
          <input
            className="signup-input"
            type="text"
            placeholder="Pharmacy Name"
            name="pharmacyName"
            value={formData.pharmacyName}
            onChange={handleInputChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Pharmacy ID"
            name="pharmacyId"
            value={formData.pharmacyId}
            onChange={handleInputChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />
          <input
            className="signup-input"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button className="signup-button" type="submit">Sign Up</button>
        </form>
      </div>
      <div className="signup-overlay-container">
        <div className="signup-overlay">
          <div className="signup-overlay-panel signup-overlay-left">
            <h1 className="signup-overlay-h1">Welcome Back!</h1>
            <p className="signup-overlay-p">To keep connected with us please login with your personal info</p>
            <button className="signup-overlay-button ghost" onClick={toggleForm}>Sign Up as Patient</button>
          </div>
          <div className="signup-overlay-panel signup-overlay-right">
            <h1 className="signup-overlay-h1">Hello, Friend!</h1>
            <p className="signup-overlay-p">Enter your personal details and start journey with us</p>
            <button className="signup-overlay-button ghost" onClick={toggleForm}>Sign Up as Pharmacist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;