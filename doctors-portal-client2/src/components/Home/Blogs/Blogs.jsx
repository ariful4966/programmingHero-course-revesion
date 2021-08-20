import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import coudi from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import aliza from '../../../images/aliza.png'
const blogPost = [
    {
        name: 'Dr. Aliza',
        photo: aliza,
        title: 'Check at least a doctor in a year for your teeth',
        body: 'It is a long establish fact that by the readable content of a lot of layout. the point',
        date: '23 April 2021'
    },
    {
        name: 'Dr. Coudi',
        photo: coudi,
        title: '2 time of brush in a day can keep your helthy',
        body: 'It is a long establish fact that by the readable content of a lot of layout. the point',
        date: '23 April 2021'
    },
    {
        name: 'Dr. Jorj Ema',
        photo: ema,
        title: 'The tooth cancer is taking a challenge',
        body: 'It is a long establish fact that by the readable content of a lot of layout. the point',
        date: '23 April 2021'
    }
]

const Blogs = () => {
    return (
        <section className="serces-container my-5" id="blog">
            <div className="container">
                <div className="section-header text-center">
                    <h5 style={{ color: '#1CC7C1', textTransform: 'uppercase' }}>Our Blogs</h5>
                    <h2>From Our Blog News</h2>
                </div>
                <div className="row  g-4 my-5 blog">
                    {
                        blogPost.map((post, index) => <BlogPost key={index} post={post} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;