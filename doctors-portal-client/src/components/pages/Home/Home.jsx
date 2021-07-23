import React from 'react';
import Appoinment from '../../partial/Appoinment/Appoinment';
import Banner from '../../partial/Banner/Banner';
import DentalCare from '../../partial/DentalCare/DentalCare';
import Header from '../../partial/Header/Header';
import PortalInfo from '../../partial/PortalInfo/PortalInfo';
import Service from '../../partial/Service/Service';
import Testimonial from '../../partial/Testimonial/Testimonial';
import './Home.scss';

const Home = () => {
    return (
        <div className="potalInfor_area ">
            <div className="banner_container">
                <Header />
                <Banner />
                <PortalInfo/>
            </div>
            <Service/>
            <DentalCare/>
            <Appoinment/>
            <Testimonial/>
        </div>
    );
};

export default Home;