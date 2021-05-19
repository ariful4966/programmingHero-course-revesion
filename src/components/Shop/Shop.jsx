import { useEffect, useState } from 'react';
import fakeData from '../../fakeData'

const Shop = () => {
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const first10 = fakeData.slice(0, 10)
        setProducts(first10)
    },[])
    
    
    console.log(products);
    return (
        <div>
            <h1>This is Shop</h1>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map((product, id)=><li key={id}>{product.name}</li>)
                }
            </ul>
        </div>
    )
}
export default Shop;