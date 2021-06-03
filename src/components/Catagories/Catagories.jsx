import React from 'react';
import CategoryDetail from '../CatagoryDetail/CatagoryDetail';

const Categories = ({count}) => {
    return (
        <div>
            <h2>Select Your Category</h2>
            <CategoryDetail count={count}/>
        </div>
    );
};

export default Categories;