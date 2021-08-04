import React from 'react';
import Header from '../../partials/Header/Header';
import NetworkCategory from '../../partials/NetworkCategory/NetworkCategory';
import Search from '../../partials/Search/Search';

const Home = () => {
    return (
        <main>
            <Header/>
            <Search/>
            <NetworkCategory/>
        </main>
    );
};

export default Home;