import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div>
    <div className="landing" style={{color:"black"}}>
      <header className="App-header">
        <h1 style={{ color: "white",textAlign:"center" }}>PharmaFinder</h1>
      </header>
      <div className="content-app">
        <div className="box">
          <img src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?cs=srgb&dl=pexels-pixabay-139398.jpg&fm=jpg" alt="First Box" />
          <p>Browsing medicines made easier!</p>
        </div>
        <div className="box">
          <img src="https://w0.peakpx.com/wallpaper/915/450/HD-wallpaper-interior-pharmacy-cute-pharmacy.jpg" alt="Second Box" />
          <p>Manage your prescriptions leisurely</p>
        </div>
        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznbmUF55DWwn3Yd0cDSHEcR_5cMkKSw1EFg&s" alt="Third Box" />
          <p>Make a mindful and healthy living out of PharmaFinder!</p>
        </div>
      </div>
      <div style={{textAlign:"center"}}>
      <button className="continue-button" onClick={handleClick}>CONTINUE</button>
      </div>
    </div>
    </div>
  );
}

export default App;
