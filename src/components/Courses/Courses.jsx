import './Courses.css'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import SingleCourse from './SingleCourse';

const Courses = ({ courses }) => {
    return (
        <Container>
            <CardGroup >
                {
                    courses.map((course, i) => <SingleCourse key={i} course={course}></SingleCourse>)
                }
            </CardGroup>
        </Container>

    );
};

export default Courses;