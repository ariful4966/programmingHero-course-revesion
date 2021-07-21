import React from 'react';

const ManageInventory = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {}
        console.log(e.target.name = e.target.vaule);

        // fetch('https://ema-john-server4082.herokuapp.com/addProduct', {
        //     method: 'POST',
        //     body: JSON.stringify(product),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
    }
    return (
        <div className="container">
            <form action="" onSubmit={handleSubmit}>
                <p><span>Name: </span><input type="text" name="name" /></p>
                <p><span>Price: </span><input type="text" name="price" /></p>
                <p><span>Quantity: </span><input type="text" name="quantity" /></p>
                <p><span>Products Image:</span><input type="file" name="img" /></p>
                <button type="submit">Add Product</button>
            </form>

        </div>
    );
};

export default ManageInventory;