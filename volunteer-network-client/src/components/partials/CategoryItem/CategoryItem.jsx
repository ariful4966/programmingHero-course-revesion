

import { useHistory } from 'react-router';
import { Card, Col } from 'react-bootstrap';

const CategoryItem = ({ ct , colors}) => {
    const random = colors[Math.floor(Math.random() * colors.length)];
    const history = useHistory()

    const ragistation = (id) => {
        history.push(`/registation/${id}`)
    }

    return (
        <Col md={3} className="my-3 singleCategory">
            <Card style={{ background: random }} onClick={() => ragistation(ct._id)}>
                <Card.Img variant="top" src={ct.img} />
                <Card.Body>
                    <Card.Title>{ct.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default CategoryItem;