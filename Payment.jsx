
import React, { useState } from "react";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [carname, setCarname] = useState("");
  const [carmodel, setCarmodel] = useState("");
  const [amount, setAmount] = useState('');
  const [userType, setUserType] = useState('');
  const [citizenshipFile, setCitizenshipFile] = useState(null);
  const [passportFile, setPassportFile] = useState(null);

  const navigate = useNavigate()

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    if (userType === "local") {
      setCitizenshipFile(fileObj);
    } else if (userType === "tourist") {
      setPassportFile(fileObj);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   

    const formData = new FormData();
    formData.append('carname', carname);
    formData.append('carmodel', carmodel);
    formData.append('amount', amount);
    formData.append('userType', userType);
    
    if (userType === "local" && citizenshipFile) {
      formData.append('citizenshipFile', citizenshipFile);
    } else if (userType === "tourist" && passportFile) {
      formData.append('passportFile', passportFile);
    } else {
      alert('Please upload the required file.');
      return;
    }

    Axios.post("http://localhost:3000/auth/signup", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
        if(response.data.status) {
            alert('Form submitted successfully!');
            navigate('/Submit')
        }
    }).catch(err => {
        console.log(err)
    })
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Payment</h2>
        <label htmlFor="name">Car Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Car Name"
          onChange={(e) => setCarname(e.target.value)}
          required
        />
        
        <label htmlFor="location">Car Model</label>
        <input
          type="text"
          id="model"
          placeholder="Enter Car Model"
          onChange={(e) => setCarmodel(e.target.value)}
          required
        />
        <label htmlFor="pickupDate">Amount:</label>
        <input type="amount" id="amount"  placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} required/>
        <br />

        <label>Choose:</label>
        <div className="radio-button">
          <label>
            <input type="radio" value="local" checked={userType === "local"} onChange={(e) => setUserType(e.target.value)} required />
           Online Payment
          </label>
          
          <label>
            <input type="radio" value="tourist" checked={userType === "tourist"} onChange={(e) => setUserType(e.target.value)} required/>
            Cash
          </label>
        </div>
        <br />

        {/* {userType === "local" && (
          <div>
            <label htmlFor="citizenshipFile">Upload Citizenship:</label>
            <input id="citizenshipFile" type="file" onChange={handleFileChange} />
          </div>
        )}

        {userType === "tourist" && (
          <div>
            <label htmlFor="passportFile">Upload Passport:</label>
            <input id="passportFile" className="file-upload" type="file" onChange={handleFileChange} />
          </div>
        )} */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Payment;
