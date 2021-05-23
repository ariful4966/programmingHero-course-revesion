import { Button, Card, Col, Nav } from 'react-bootstrap'

const SingleCourse = ({ course, handleEnrollCourse }) => {
    const { name, title, body, price, picture } = course;
    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name} </Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={()=>handleEnrollCourse(course)}>Enroll Now</Button>
                    <Nav.Link href="/" type="button" variant="info">View Details</Nav.Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleCourse;