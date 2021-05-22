import { Button, Card , Col, Nav} from 'react-bootstrap'

const SingleCourse = ({ course }) => {
    const { name, title, body, price, pirture } = course;
    console.log(course);
    return (
        <Col md={4} className="p-3">
            <Card>
                <Card.Img variant="top" src={pirture} />
                <Card.Body>
                    <Card.Title>{name} </Card.Title>
                    <Card.Text>
                        {title}
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button>Enroll Now</Button>
                    <Nav.Link href="/" type="button" variant="info">View Details</Nav.Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleCourse;