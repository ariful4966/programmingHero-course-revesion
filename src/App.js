import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import courseData from './data/index'

function App() {
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    setCourses(courseData)

  }, [])
  return (
    <div >
      <Header courses={courses} />
      <Slider courses={courses} />
      <Courses courses={courses} />
    </div>
  );
}

export default App;
