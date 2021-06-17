import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../../images/logo2.png';
import Navigation from "../Navigation/Navigation";
import './Header.scss';

const Header = () => {
    return (
        <section className="header_area">
            <Container>
                <header>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="menu">
                        <Navigation/>
                    </div>
                </header>
            </Container>
        </section>
    );
};

export default Header;