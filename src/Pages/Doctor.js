import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getPets } from '../api'; // Your API functions for fetching data

function DoctorDashboard() {
  const history = useHistory();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pets data from backend
    const fetchPets = async () => {
      try {
        const petsData = await getPets();
        setPets(petsData);
      } catch (error) {
        console.error('Error fetching pets:', error);
        // Handle error, maybe redirect to login page
        history.push('/');
      }
    };

    fetchPets();
  }, [history]);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      {/* Display pets data */}
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>{pet.name} - {pet.type}</li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDashboard;