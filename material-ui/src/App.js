import { Button, Card, Container, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';

import News from './components/Card';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a41eb0cd653b43398839dbb42b1ee20f';
    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [])
  console.log(articles);
  return (
    <Container >
      <h1>Total Top News: {articles.length}</h1>
      <Button variant="contained" color="primary">Hello World</Button>
      <Grid container spacing={3}>
        {
          articles.map((article, idx) => <Grid item lg={6}><News key={idx} article={article} /></Grid>)
        }
      </Grid>
    </Container>
  );
}

export default App;
