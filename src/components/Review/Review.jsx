import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Review = (props) => {
    const [cart, setCart] = useState([])
    const { products } = props;
    
    // console.log(products);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productsKeys = Object.keys(savedCart);
        const cartProducts = productsKeys.map(key => {
            const product = products.find(pd => pd.key === key);
            product.quantity = savedCart[key]
            return product
        })
        setCart(cartProducts);
    }, [])
    return (
         <div className="shop-container container">
         <div className="product-container">
         {
                cart.map((pd, idx)=> <Product showBtn removeBtn key={idx} product={pd}></Product>)
            }
         </div>
         <div className="card-container">
             <Cart cart={cart}></Cart> 
         </div>
     </div>
    );
};

export default Review;