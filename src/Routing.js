import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './Home/App';
import Login from './LoginandSignup/Login';
import Signup from './LoginandSignup/Signup';
import Firstpage from './Home/FirstPage'
import CreateList from './ListSearch/CreateList';
import SearchSymptoms from './ListSearch/SearchSymptoms';
import Post from './Posts/Post';
import Pharmacist from './Pharmacist';
import Dashboard from './Pharma/Dashboard';
import SignupForPharmacist from './LoginandSignup/SignupForPharmacist';
import SignupForPatient from './LoginandSignup/SignupForPatient';
import OrderPage from './Pharma/OrderPage';
import StockPage from './Pharma/StockPage';
import Analysis from './Pharma/Analysis';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/home" element={<Firstpage/>}/>
        <Route path="/list" element={<CreateList/>}/>
        <Route path="/diagnosis" element={<SearchSymptoms/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/pharmacist" element={<Dashboard/>}/>
        <Route path="/pharmacist-signup" element={<Signup/>}/>
        <Route path="/customer-signup" element={<Signup/>}/>
        <Route path="/stocks" element={<StockPage/>}/>
        <Route path="/orders" element={<OrderPage/>}/>
        <Route path="/analysis" element={<Analysis/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
