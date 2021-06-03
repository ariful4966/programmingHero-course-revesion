import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Catagories/Catagories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div style={{ border: '1px solid purple' }}>
            <h1>This is Home :{category}</h1>
            <Categories ></Categories>
        </div>
    );
};

export default Home;