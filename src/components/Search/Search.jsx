import './Search.css';

const SearchArea = (props) => {
    return (
        <div className="search-bg">
            <div className="search-section">
                <div className="search-area">
                    <input type="search" placeholder="Type Any product name"/>
                </div>
                <div className="header-cart">
                🛒 <span>{props.cart.length}</span>
                </div>
            </div>
        </div>
    );
};

export default SearchArea;