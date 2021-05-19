import './Product.css'
const Product = (props)=>{
    const { img, name, seller, price, stock} = props.product
    console.log(props);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in  stock - Order Soon</small></p>
            </div>
        </div>
    )
}
export default Product;