import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './CreateList.css';
import Navbar from '../Components/Navbar'; // Import Navbar component
import MedicineSearchResults from '../Components/MedcineSearchResults'; // Import MedicineSearchResults component

const CreateList = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMedicines, setSelectedMedicines] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // To show/hide MedicineSearchResults
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate(); // Initialize useNavigate

  const userAddress = {
    street: "456 Elm St",
    town: "Springfield",
    district: "Springfield District",
    state: "Example State"
  };

  useEffect(() => {
    fetch('/Listmedicine.json')
      .then(response => response.json())
      .then(data => setMedicines(data));

    fetch('/pharmacies.json')
      .then(response => response.json())
      .then(data => setPharmacies(data));
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm('');
    setSuggestions([]);
    if (!selectedMedicines.some(med => med.name === suggestion.name)) {
      setSelectedMedicines([...selectedMedicines, { ...suggestion, quantity: 1, selectedDosage: suggestion.dosages[0] }]);
    }
  };

  const handleQuantityChange = (index, delta) => {
    const updatedMedicines = [...selectedMedicines];
    updatedMedicines[index].quantity += delta;
    if (updatedMedicines[index].quantity <= 0) {
      updatedMedicines.splice(index, 1);
    }
    setSelectedMedicines(updatedMedicines);
  };

  const handleDosageChange = (index, event) => {
    const updatedMedicines = [...selectedMedicines];
    updatedMedicines[index].selectedDosage = event.target.value;
    setSelectedMedicines(updatedMedicines);
  };

  const handleSearch = () => {
    const filteredResults = pharmacies.filter(pharmacy =>
      selectedMedicines.every(selectedMedicine =>
        pharmacy.medicines.includes(selectedMedicine.name)
      )
    );

    const categorizedResults = {
      nearYou: [],
      inYourDistrict: []
    };

    filteredResults.forEach(pharmacy => {
      if (pharmacy.location.town === userAddress.town && pharmacy.location.street === userAddress.street) {
        categorizedResults.nearYou.push(pharmacy);
      } else if (pharmacy.location.district === userAddress.district) {
        categorizedResults.inYourDistrict.push(pharmacy);
      }
    });

    setSearchResults(categorizedResults);
    setShowResults(true); // Show results

    if (filteredResults.length === 0) {
      alert("Oops!! No results found.");
    }
  };

  const handlePost = () => {
    navigate('/post', { state: { selectedMedicines } });
  };

  const toggleMenu = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='listbody'>
      <Navbar menuOpen={sidebarOpen} toggleMenu={toggleMenu} />
      
      <div className="create-list-container">
        <header>
          <h1>Create List</h1>
        </header>
        <main>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search Medicine"
            className="search-bar"
          />
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
          <div className="selected-medicines">
            {selectedMedicines.map((medicine, index) => (
              <div key={index} className="medicine-item">
                <span>{medicine.name}</span>
                <select
                  value={medicine.selectedDosage}
                  onChange={(event) => handleDosageChange(index, event)}
                >
                  {medicine.dosages.map((dosage, dosageIndex) => (
                    <option key={dosageIndex} value={dosage}>
                      {dosage}
                    </option>
                  ))}
                </select>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                  <span>{medicine.quantity}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                </div>
                <button onClick={() => handleQuantityChange(index, -medicine.quantity)}>X</button>
              </div>
            ))}
          </div>
          <div className="action-buttons">
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
            <button className="post-button" onClick={handlePost}>
              Post
            </button>
          </div>
          {showResults && (
            <MedicineSearchResults
              selectedTablets={selectedMedicines}
              street={userAddress.street}
              town={userAddress.town}
              district={userAddress.district}
              pharmacies={pharmacies}
            />
          )}
        </main>
        <footer>
          <p>Fill all the details given in the form</p>
        </footer>
      </div>
    </div>
  );
};

export default CreateList;