import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = ({product}) => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h4>This  is your category Detail</h4>
            <h6>Selected Product: {product.name}</h6>
        </div>
    );
};

export default CategoryDetail;