
import React from 'react';
import { useParams } from 'react-router';
import Preloader from '../Preloader/Preloader';
import Product from '../Product/Product';

const ProductDetail = (props) => {
    document.title = "Product Detail";
    const { products, cart, setCart } = props;
    const { pdKey } = useParams();
    const product = products.find(pd => pd.key === pdKey)



    return (
        <div className="container">
            {
                product === {} ? <Preloader></Preloader> :
                    <Product showBtn={false} product={product} ></Product>
            }
        </div>
    );
};

export default ProductDetail;