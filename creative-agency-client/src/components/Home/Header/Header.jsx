import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import banner  from '../../../images/Frame.png';
import './Header.css'

const Header = () => {
    return (
        <header className=" mb-5">
            <Navigation/>
            <section className="header_area ">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5}>
                            <article className="header_content">
                                <h2>Let's Grow Your To The Next Lavel</h2>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quos consequatur fugiat aliquam totam deserunt dolorum, at, illo nemo quis provident blanditiis sequi ipsum suscipit consequuntur aliquid, rem maxime perferendis.
                                </p>
                                <Button className="bg-master">Hire Us</Button>
                            </article>
                        </Col>
                        <Col md={7}>
                            <div className="header_banner_img">
                                <img className="w-100 " src={banner} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </header>
    );
};

export default Header;