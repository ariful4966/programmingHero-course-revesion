import { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const first10 = fakeData.slice(0, 10)
        setProducts(first10)
    },[])

    const handleAddProduct = (product)=>{
        console.log('Product Added', product);
    }
    
    
    console.log(products);
    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
                {
                    products.map((product, id)=><Product
                     key={id} 
                     product={product} 
                     handleAddProduct={handleAddProduct}
                     ></Product>)
                }
            </ul>
            </div>
           <div className="card-container">
               <h3>This cart container</h3>
           </div>
        </div>
    )
}
export default Shop;