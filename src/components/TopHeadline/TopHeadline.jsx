import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a41eb0cd653b43398839dbb42b1ee20f`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles);
            })
    }, [])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map((article, idx) => <News key={idx} article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;