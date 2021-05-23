import React from 'react';
import Slider from '../Slider/Slider';
import Courses from '../Courses/Courses';

const Home = ({ courses, handleEnrollCourse }) => {
    const courseObj = courses.slice(0, 3);
    return (
        <>
            <Slider courses={courses} handleEnrollCourse={handleEnrollCourse}/>
           <div className="courses-area">
               <h2 className="text-center">Our Courses</h2>
               <Courses courses={courseObj.reverse()} handleEnrollCourse={handleEnrollCourse}/>
           </div>
        </>
    );
};

export default Home;