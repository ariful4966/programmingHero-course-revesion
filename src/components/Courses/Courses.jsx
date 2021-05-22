import './Courses.css'
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import SingleCourse from './SingleCourse';

const Courses = ({ courses }) => {
    return (
        <Container>
            <CardDeck>
                <Row>
                {
                    courses.map((course, i) => <SingleCourse key={i} course={course}></SingleCourse>)
                }
                </Row>
            </CardDeck>
        </Container>

    );
};

export default Courses;