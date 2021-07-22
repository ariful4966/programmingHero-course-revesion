import React from 'react';
import Banner from '../../partial/Banner/Banner';
import Header from '../../partial/Header/Header';
import PortalInfo from '../../partial/PortalInfo/PortalInfo';
import './Home.scss';

const Home = () => {
    return (
        <div className="potalInfor_area">
            <div className="banner_container">
                <Header />
                <Banner />
                <PortalInfo/>
            </div>
        </div>
    );
};

export default Home;