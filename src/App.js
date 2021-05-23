import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Slider from './components/Slider/Slider';
import courseData from './data/index'

function App() {
  const [courses, setCourses] = useState([]);
  const [addCourse, setAddCourse] = useState([])

  useEffect(() => {
    setCourses(courseData)

  }, [])
  const handleEnrollCourse = (course) => {
    const enrolled = addCourse.find(cr => cr.id === course.id)
    if (!enrolled) {
      const newCourse = [...addCourse, course];
      setAddCourse(newCourse)
    }

  }

  return (
    <Router >
      <Header courses={addCourse} />
      <Switch>
        <Route path="/courses">
          <div className="courses-area">
            <Courses courses={courses} handleEnrollCourse={handleEnrollCourse}></Courses>
          </div>
        </Route>
        <Route path="/">
          <Home courses={courses} handleEnrollCourse={handleEnrollCourse}></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
