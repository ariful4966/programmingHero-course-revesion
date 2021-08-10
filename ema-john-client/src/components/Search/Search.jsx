
import { useContext, useEffect, useState } from 'react';
import { FormControl } from 'react-bootstrap';
import { UserContext } from '../../App';
import './Search.css';

const SearchArea = (props) => {
    const [search, setSearch] = useState('')
    const [, , products, setProducts] = useContext(UserContext)
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        fetch('https://ema-john-server4082.herokuapp.com/products?search=' + search)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [search])
    return (
        <div className="search-bg">
            <div className="search-section">
                <div className="search-area">
                    <FormControl className="form-controll" type="text" placeholder="Type Any product name" onBlur={handleSearch} />
                </div>
                <div className="header-cart">
                    🛒 <span>{props.cart.length}</span>
                </div>
            </div>
        </div>
    );
};

export default SearchArea;