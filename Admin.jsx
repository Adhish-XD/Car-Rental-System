import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Admin.css";

function Admin() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cars'); // Adjust URL according to your backend API endpoint
        setCars(response.data); // Assuming the response contains an array of car objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='table-container'>
      <div className='button-container'>
        <Link to="/addcarform">
          <button>Add Car</button>
        </Link>
        {/* Implement other buttons as needed */}
      </div>
      <table className="submitted-data-table">
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Number Plate</th>
            <th>Category</th>
            <th>Color</th>
            <th>Car Image</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.name}</td>
              <td>{car.numberPlate}</td>
              <td>{car.category}</td>
              <td>{car.color}</td>
              <td>{car.image}</td>
              <td>Edit/Delete</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default Admin;
