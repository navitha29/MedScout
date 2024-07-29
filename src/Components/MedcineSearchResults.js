import React, { useEffect, useState } from 'react';

const MedicineSearchResults = ({ selectedTablets, street, town, district }) => {
  const [pharmaciesData, setPharmaciesData] = useState([]);
  const [matchingPharmacies, setMatchingPharmacies] = useState([]);

  useEffect(() => {
    fetch('/Pharmacies.json')
      .then((response) => response.json())
      .then((data) => setPharmaciesData(data))
      .catch((error) => console.error('Error fetching pharmacies data:', error));
  }, []);

  useEffect(() => {
    const findMatchingPharmacies = () => {
      const results = [];
      selectedTablets.forEach(tablet => {
        pharmaciesData.forEach(pharmacy => {
          if (pharmacy.medicines.includes(tablet.name)) {
            results.push(pharmacy.name);
          }
        });
      });
      setMatchingPharmacies([...new Set(results)]);
    };

    if (pharmaciesData.length > 0 && selectedTablets.length > 0) {
      findMatchingPharmacies();
    }
  }, [pharmaciesData, selectedTablets]);

  return (
    <div className="medicine-search-results">
      <h2>Matching Pharmacies</h2>
      <p>Street: {street}</p>
      <p>Town: {town}</p>
      <p>District: {district}</p>
      <ul>
        {matchingPharmacies.map((pharmacy, index) => (
          <li key={index}>{pharmacy}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineSearchResults;