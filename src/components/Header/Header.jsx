import logo from '../../images/logo.png';
import SearchArea from '../Search/Search';

import './Header.css'
const Header = (props) => {
    return (
        <div className="header">
            <a href="/"><img src={logo} alt="LOGO" /></a>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
            <SearchArea cart={props.cart} products={props.products} />
        </div>
    )
}

export default Header;