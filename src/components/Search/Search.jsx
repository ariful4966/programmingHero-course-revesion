import { useState } from 'react';
import './Search.css';

const SearchArea = (props) => {
    const { products } = props;

    const [search, setSearch] = useState([]);

    const handleSearch = (e) => {
        const text = products.filter(item=> item )
        
    }
    return (
        <div className="search-bg">
            <div className="search-section">
                <div className="search-area">
                    <input type="text" placeholder="Type Any product name" onChange={handleSearch} />
                </div>
                <div className="header-cart">
                    🛒 <span>{props.cart.length}</span>
                </div>
            </div>
        </div>
    );
};

export default SearchArea;