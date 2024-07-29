import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './Home/App';
import './index.css';
import Login from './LoginandSignup/Login';
import Routing from './Routing';
import Search from './ListSearch/Search';
import SearchSymptoms from './ListSearch/SearchSymptoms';
import Recommended from './Recommended';
import Pharmacist from './Pharmacist';
import Dashboard from './Pharma/Dashboard';
import OrderPage from './Pharma/OrderPage';
import StockPage from './Pharma/StockPage';



ReactDOM.render(
  <React.StrictMode>
    
      <Routing/>
    
  </React.StrictMode>,
  document.getElementById('root')
);
