import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import News from './components/News';

function App() {

  const [articles, setArticles] = useState([])
  
  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a41eb0cd653b43398839dbb42b1ee20f';
    axios(url)
    .then(data=> setArticles(data.data.articles))
  }, [])
  return (
    <Container>
      <h1>Top News Headline: {articles.length}</h1>
      <Row>
        {
          articles.map((news, idx)=><Col md={12}><News key={idx} news={news}></News></Col>)
        }
      </Row>
    </Container>
  );
}

export default App;
