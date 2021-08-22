
import { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap'
import './Sider.css'



const Slider = ({ slides }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    slides.map((item, idx) =>
                        <Carousel.Item key={idx} style={{ height: '400px' }} className="col-md-4">
                            <img
                                className="d-block w-100 h-100"
                                src={item}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    );

};

// ReactDOM.render(<Slider />, document.querySelector('.demo-carousel'));

export default Slider