import React from 'react';
import './BlogPost.css'

const BlogPost = ({ post }) => {
    return (

        <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="card h-100 p-3">
                <div className=" d-flex align-items-center p-4">
                    <img src={post.photo} className="w-15 me-3" alt="" />
                    <div className="cart-name">
                        <h5 className="text-primary">{post.name}</h5>
                        <p className="text-secondary">{post.date}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title my-3">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                </div>
                <div className=" overlay">
                    <div className=" d-flex align-items-center p-4">
                        <div className="cart-name">
                            <h5 >{post.name}</h5>
                            <p >{post.date}</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title my-3">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default BlogPost;