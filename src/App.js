import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className="">
      <h2>React Bootstrap</h2>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <News></News>
      
    </div>
  );
}

export default App;
