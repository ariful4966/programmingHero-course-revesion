import React from 'react';
import Banner from '../../partial/Banner/Banner';
import DentalCategory from '../../partial/DentalCategory/DentalCategory';
import Footer from '../../partial/Footer/Footer';
import Header from '../../partial/Header/Header';

const AppoinmentPage = () => {
    return (
        <div className="appoinment_apge_area">
            <div className="banner_container">
                <Header />
                <Banner appoin />
            </div>
            <DentalCategory/>
            <Footer/>
        </div>
    );
};

export default AppoinmentPage;