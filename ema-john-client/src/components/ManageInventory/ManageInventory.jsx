import React from 'react';
import fakeData from '../../fakeData';

const ManageInventory = () => {
    const handleAddProducts = () => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            body: JSON.stringify(fakeData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
    return (
        <div className="container">
            <button onClick={handleAddProducts}>Add Product</button>
        </div>
    );
};

export default ManageInventory;