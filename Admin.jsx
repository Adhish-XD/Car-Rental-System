import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Admin.css";

function Admin() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cars');
      console.log(response.data);
      if (response.data && Array.isArray(response.data.cars)) {
        setCars(response.data.cars);
      } else {
        console.error('Data is not in the expected format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteCar = async (carId) => {
    try {
      await axios.delete(`http://localhost:3000/cars/${carId}`);
      // After deletion, refetch the data to update the UI
      fetchData();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className='table-container'>
      <div className='button-container'>
        <Link to="/addcarform">
          <button>Add Car</button>
        </Link>
      </div>
      <table className="submitted-data-table">
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Number Plate</th>
            <th>Category</th>
            <th>Color</th>
            <th>Car Image</th>
            <th>Status</th>
            <th>Price</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id}>
              <td>{car.carName}</td>
              <td>{car.numberPlate}</td>
              <td>{car.category}</td>
              <td>{car.color}</td>
              <td>
                <img src={car.carImage} alt="Car" style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{car.status}</td>
              <td>{car.price}</td>
              <td>
                <button onClick={() => deleteCar(car._id)}>Delete</button>
                <Link to={`/editcarform/${car._id}`}>
                  <button>Edit</button> {/* Link to the edit page with car ID */}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
