import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { handleAddProduct, product, showBtn, removeBtn, handleRemoveProduct } = props;
    const { img, name, seller, price, stock, key, quantity } = product

    // console.log(props);
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h2><Link to={"/product/"+key}>{name}</Link></h2>
                <br />
                <p><small>by: {seller}</small></p>
                <p> {
                        removeBtn && `Quantity: ${quantity}`
                    }</p>
                <p>${price}</p>
                <p><small>Only {stock} left in  stock - Order Soon</small></p>
                { showBtn && 
                    removeBtn ? <button className="main-btn">Remove</button> : <button onClick={() => handleAddProduct(product)} className="main-btn"> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                }
                    
            </div>
        </div>
    )
}
export default Product;