import './Courses.css'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import SingleCourse from './SingleCourse';

const Courses = ({ courses, handleEnrollCourse}) => {
   
    return (
        <Container>
            <CardGroup >
                {
                    courses.map((course, i) => <SingleCourse key={i} course={course} handleEnrollCourse={handleEnrollCourse}></SingleCourse>)
                }
            </CardGroup>
        </Container>

    );
};

export default Courses;