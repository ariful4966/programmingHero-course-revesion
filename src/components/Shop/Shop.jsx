
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = (props) => {
    const { cart, setCart, products } = props;


    const handleAddProduct = (product) => {

        const newCart = [...cart, product];

        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
        setCart(newCart);

    }
    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     const productsKeys = Object.keys(savedCart);
    //     const cartProducts = productsKeys.map(key => {
    //         const product = products.find(pd => pd.key === key);
    //         product.quantity = savedCart[key]
    //         return product
    //     })
    //     // setCart(cartProducts);
    //     console.log(cartProducts);
    // }, [])


    return (
        <div className="shop-container container">
            <div className="product-container">
                {
                    products.map((product, id) => <Product
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