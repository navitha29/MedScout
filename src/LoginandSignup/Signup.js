import React, { useState } from 'react';
import SignupForPatient from './SignupForPatient';
import SignupForPharmacist from './SignupForPharmacist';
import './Signup.css';

const Signup = () => {
  const [isPatient, setIsPatient] = useState(true);

  const toggleForm = () => {
    setIsPatient(!isPatient);
  };

  return (
    <div className={`container ${isPatient ? '' : 'right-panel-active'}`}>
      <div className="form-container sign-up-container">
        <SignupForPatient />
      </div>
      <div className="form-container sign-in-container">
        <SignupForPharmacist />
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Signup for Pharmacist</h1>
            <p>Fill in your details to create an account as a Pharmacist</p>
            <button className="ghost" onClick={toggleForm}>Sign Up</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Signup for Patient</h1>
            <p>Fill in your details to create an account as a Patient</p>
            <button className="ghost" onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
