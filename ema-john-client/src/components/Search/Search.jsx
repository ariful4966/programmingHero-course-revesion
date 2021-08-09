
import { FormControl } from 'react-bootstrap';
import './Search.css';

const SearchArea = (props) => {
//    console.log(props);
    return (
        <div className="search-bg">
            <div className="search-section">
                <div className="search-area">
                    <FormControl className="form-controll" type="text" placeholder="Type Any product name"  />
                </div>
                <div className="header-cart">
                    🛒 <span>{props.cart.length}</span>
                </div>
            </div>
        </div>
    );
};

export default SearchArea;