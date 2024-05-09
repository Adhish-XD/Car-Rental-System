import React from 'react'
import axios from 'axios'
import './About.css'
import image3 from '../assets/image3.png'


const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={image3} alt="" className='about-img'/>
            </div>
            <div className="about-right">
                <h3>About Vroom Rental</h3>
                <p>
                Vroom Rental Car offers a diverse fleet to meet various travel needs. With a commitment to customer satisfaction and convenience, Vroom provides reliable and well-maintained cars, ranging from compact models to spacious SUVs. Whether for business trips, family vacations, or weekend getaways, Vroom aims to deliver exceptional service, competitive rates, and seamless rental experiences. With locations conveniently situated across multiple cities, Vroom makes it easy for customers to access quality transportation wherever their journey takes them</p>
            </div>
            
        </div>
    )
}

export default About;