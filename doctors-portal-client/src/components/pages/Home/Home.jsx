import React, { useEffect } from 'react';
import Appoinment from '../../partial/Appoinment/Appoinment';
import Banner from '../../partial/Banner/Banner';
import Blog from '../../partial/Blog/Blog';
import Contact from '../../partial/Contact/Contact';
import DentalCare from '../../partial/DentalCare/DentalCare';
import Doctors from '../../partial/Doctors/Doctors';
import Header from '../../partial/Header/Header';
import PortalInfo from '../../partial/PortalInfo/PortalInfo';
import Service from '../../partial/Service/Service';
import Testimonial from '../../partial/Testimonial/Testimonial';
import Footer from '../../partial/Footer/Footer'
import './Home.scss';

const Home = () => {
    
    return (
        <div className="potalInfor_area ">
            <div className="banner_container banner_overlay">
                <Header home />
                <Banner />
                <PortalInfo />
            </div>
            <Service />
            <DentalCare />
            <Appoinment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};



export default Home;