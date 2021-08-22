import React from 'react';
import Brand from '../Brand/Brand';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <main>
            <Header/>
            <Brand/>
            <Services/>
            <Works/>
            <FeedBack/>
            <Footer/>
        </main>
    );
};

export default Home;