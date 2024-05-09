import React from 'react';
import "./LuxuryCar.css";
import audi from '../assets/Audi.jpg'
import bentley from '../assets/Bentley.jpg'
import bmw from '../assets/BMW.jpg'
import porsche from '../assets/Porsche.jpg'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function ProductList() {
function search() {
let filter = document.getElementById('find').value.toUpperCase();
let item = document.querySelectorAll('product');
let l = document.getElementsByTagName('h3');
for (var i = 0; i <= l.length; i++) {
let a = item[i].getElementsByTagName('h3')[0];
let value = a.innerHTML || a.innerText || a.textContent;
if (value.toUpperCase().indexOf(filter) > -1) {
item[i].style.display ="";
} else {
item[i].style.display = "none";
}
}
}
return (
<div className="container-fluid">
<div className="container">
<div className="search">
<h1>Luxury Car</h1>
<input type="text" name="" id="find" placeholder="search here...." onKeyUp={search} />

</div>
<div className="product-list">
<div className="product">
<div>
<img src={audi} className='typesof'/>
<h3>Audi</h3>
<button><Link to="/audi">BOOK</Link></button>
</div>
<div>
<img src={bmw} className='typesof'/>
<h3>BMW</h3>
<button><Link to="/bmw">BOOK</Link></button>
</div>
<div>
<img src={porsche} className='typesof'/>
<h3>Porsche</h3>
<button><Link to="/porsche">BOOK</Link></button>
</div>
<div>
<img src={bentley} className='typesof'/>
<h3>Bentley Continental GT</h3>
<button><Link to="/bentley">BOOK</Link></button>
</div>
</div>
</div>
</div>
</div>
);
}
function LuxuryCar() {
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
return (
    <div>


<br /> <br />
{/*<button onClick={handleLogout}>Logout</button>*/}
<ProductList />
</div>
);
}
export default LuxuryCar;