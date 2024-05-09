import React from 'react';
import "./RegularCar.css";
import axios from 'axios';
import scorpio from '../assets/Scorpio.jpg'
import maruti from '../assets/Maruti.jpg'
import toyota from '../assets/Toyota.jpg'
import ford from '../assets/Ford.jpg'
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
<h1>Regular Cars</h1>
<input type="text" name="" id="find" placeholder="search here...." onKeyUp={search} />

</div>
<div className="product-list">
<div className="product">
<div>
<img src={toyota} className='typesof'/>
<h3>Toyota</h3>
<button><Link to="/toyota">BOOK</Link></button>
</div>
<div>
<img src={maruti} className='typesof'/>
<h3>Maruti</h3>
<button><Link to="/maruti">BOOK</Link></button>
</div>
<div>
<img src={ford} className='typesof'/>
<h3>Ford</h3>
<button><Link to="/ford">BOOK</Link></button>
</div>
<div>
<img src={scorpio} className='typesof'/>
<h3>Scorpio</h3>
<button><Link to="/scorpio">BOOK</Link></button>
</div>
</div>
</div>
</div>
</div>
);
}
function RegularCar() {
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
export default RegularCar;