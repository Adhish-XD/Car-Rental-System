import axios from 'axios'
import "../index.css";
import React from 'react'
import Cars from "../assets/Cars.jpg"
import luxurycar from "../assets/luxurycar.jpg"
import sportscar from "../assets/sportscar.jpg"
import regularcar from "../assets/regularcar.jpg"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Menubar from './Menu'

import image1 from '../assets/Cars.jpg'
import image2 from '../assets/vroom.png'
function ProductList() {
  function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let item = document.querySelectorAll('.product');
  let l = document.getElementsByTagName('h3');
  for (var i = 0; i <=l.length; i++) {
  let a = item[i].getElementsByTagName('h3')[0];
  let value = a.innerHTML || a.innerText || a.textContent;
  if (value.toUpperCase().indexOf(filter) > -1) {
  item[i].style.display = "";
  } else {
  item[i].style.display = "none";
  }
  }
  }
  
  return (
   
    
  <div className="container-fluid">

  <div className="container">
  
  <div className="search">
      <h1>All Products</h1>
      {/* <input type="text" name="" id="find" placeholder="search here...." onKeyUp={search} />*/}  
  </div>
  {/*<div className="product-list">
  <div className="product-img">
  <img src={luxurycar} />
  <div className='product'>
  <button><Link to="/luxurycar">Luxury Cars</Link></button>
  </div>
  </div>
  {/* Add other product elements similarly */}
 {/* <div className="product-img">
  <img src={sportscar} />
  <div className='product'>
  <button><Link to="/sportscar">Sports Cars</Link></button>
  </div>
  </div>
  <div className="product-img">
  <img src={regularcar} />
  <div className='product'>
  <button><Link to="/regularcar">Regular Cars</Link></button>
  </div>
  </div>
  </div>*/}
  <div className="product-list">
<div className='product-img'>
  <div>
<img  src={luxurycar}  alt="Luxury Car Image" style={{height:'300px', width: '440px'}}/>
<button><Link to="/luxurycar">Luxury Cars</Link></button>
</div>
<div>
<img src={sportscar} alt='Sports Car Image' style={{height:'300px', width: '440px'}}/>
<button><Link to="/sportscar">Sports Car</Link></button>
</div>
<div>
<img src={regularcar} alt='Regular Car Image' style={{height:'300px', width: '440px'}} />
<button><Link to="/regularcar">Regular Cars</Link></button>
</div>
</div>



 </div>
 </div>
 </div>
  );
  }
  function Home() {
  const navigate = useNavigate();
  const handleLogout = () => {
  axios.defaults.withCredentials = true;
  axios.get('http://localhost:3000/auth/logout')
  .then(res => {
  if (res.data.status) {
  navigate('/login');
  }
  })
  .catch(err => {
  console.log(err);
  });
  };
  const images = [image1, image2];
  return (
  <div>
    
  
  <Menubar/>
  <img className='cars' src={Cars} />
   

      
  
  

  <br /> <br />
  
  <ProductList />
  <footer className="footer">
<p>&copy; {new Date().getFullYear()} Car Rental System. All rights reserved.</p>
  s
</footer>
  </div>
  );
  }

export default Home