import React from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const ProductDetail = (props) => {
    const { products, cart, setCart } = props;
    const { pdKey } = useParams();
    const product = products.find(pd => pd.key === pdKey)

   

    return (
        <div className="container">
            <Product showBtn={false} product={product}  ></Product>
        </div>
    );
};

export default ProductDetail;