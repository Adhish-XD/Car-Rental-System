import React from 'react';
import "./SportsCar.css";
import axios from 'axios';
import Alfa from '../assets/alfa.jpg'
import Corvette from '../assets/corvette.jpg'
import mustang from '../assets/mustang.jpg'
import Nissan from '../assets/nissan.jpg'
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
<h1>Sports Cars</h1>
<input type="text" name="" id="find" placeholder="search here...." onKeyUp={search} />

</div>
<div className="product-list">
<div className="product">
<div>
<img src={mustang} className='typesof'/>
<h3>Ford Mustang</h3>
<button><Link to="/mustang">BOOK</Link></button>
</div>
<div>
<img src={Corvette} className='typesof'/>
<h3>Chevrolet Corvette</h3>
<button><Link to="/corvette">BOOK</Link></button>
</div>
<div>
<img src={Nissan} className='typesof'/>
<h3>Nissan Z</h3>
<button><Link to="/nissan">BOOK</Link></button>
</div>
<div>
<img src={Alfa} className='typesof'/>
<h3>Alfa Romeo</h3>
<button><Link to="/alfa">BOOK</Link></button>
</div>
</div>
</div>
</div>
</div>
);
}
function SportsCar() {
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
export default SportsCar;