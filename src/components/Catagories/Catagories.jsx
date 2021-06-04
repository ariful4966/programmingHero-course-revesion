import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CatagoryDetail/CatagoryDetail';

const allProducts = [
    { name: 'Lanevo', category: 'Laptop' },
    { name: 'Asus', category: 'Laptop' },
    { name: 'Dell', category: 'Laptop' },
    { name: 'Nokia', category: 'Mobile' },
    { name: 'Apple', category: 'Mobile' },
    { name: 'Semsung', category: 'Mobile' },
    { name: 'Canon', category: 'Camera' },
    { name: 'Nikkon', category: 'Camera' },
    { name: 'Sony', category: 'Camera' },
];


const Categories = () => {
    const [products, setProducts] = useState([])
    const [category] = useContext(CategoryContext);
    useEffect(() => {
        
        const matchedProducts = allProducts.filter(pd => pd.category ===  category)
        setProducts(matchedProducts)
        
    }, [category])
    console.log(products);

    return (
        <div>
            <h2>Select Your Category: {category}</h2>
            {
                products.map((pd, ind) => <CategoryDetail key={ind} product={pd} />)
            }
        </div>
    );
};

export default Categories;