import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './AddCarForm.css'; // Import the CSS file

function CarDetailsForm() {
    const [carDetails, setCarDetails] = useState({
        carName: '',
        numberPlate: '',
        category: 'Sedan',
        color: '',
        carImage: null
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCarDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (event) => {
        setCarDetails(prevState => ({
            ...prevState,
            carImage: event.target.files[0]
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('carName', carDetails.carName);
        formData.append('numberPlate', carDetails.numberPlate);
        formData.append('category', carDetails.category);
        formData.append('color', carDetails.color);
        formData.append('carImage', carDetails.carImage);

        try {
            const response = await axios.post('http://localhost:3000/cars/addcar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data); // Log response from server
            // Reset form fields
            setCarDetails({
                carName: '',
                numberPlate: '',
                category: 'Sedan',
                color: '',
                carImage: null
            });
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <div className="container"> {/* Apply container class */}
            <h2>Add Car Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="carName">Car Name:</label>
                    <input type="text" id="carName" name="carName" value={carDetails.carName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="numberPlate">Number Plate:</label>
                    <input type="text" id="numberPlate" name="numberPlate" value={carDetails.numberPlate} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" value={carDetails.category} onChange={handleChange} required>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Convertible">Convertible</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color:</label>
                    <select id="color" name="color" value={carDetails.color} onChange={handleChange} required>
                        <option value="">Select Color</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        {/* Add more color options as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="carImage">Car Image:</label>
                    <input type="file" id="carImage" name="carImage" onChange={handleImageChange} accept="image/*" required />
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default CarDetailsForm;
