
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import { useEffect } from 'react';

const Shop = (props) => {
    const { cart, setCart, products } = props;

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = products.find(pd => pd.key === existingKey)
            product.quantity = savedCart[existingKey];
            return product
        })
        console.log(previousCart); 
    }, []) 


    const handleAddProduct = (product) => {

        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key)
            newCart = [...others, sameProduct]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);


    }



    return (
        <div className="shop-container container">
            <div className="product-container">
                {
                    products.slice(0, 10).map((product, id) => <Product
                        key={id}
                        showBtn={true}
                        product={product}
                        handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}
export default Shop;