import React from 'react';
import Categories from '../Catagories/Catagories';

const Home = ({ count }) => {
    return (
        <div style={{ border: '1px solid purple' }}>
            <h1>This is Home :{count}</h1>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;