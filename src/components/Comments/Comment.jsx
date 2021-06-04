import React from 'react';
import Loading from '../Loading/Loading';
import './Comment.scss'

const Comment = ({comment}) => {
    if(!comment)return <Loading/>
    return (
        <div className="comment-info">
            <div className="name-info">
                <img src="https://img.icons8.com/plasticine/2x/user.png" alt="Photo" />
                <h5>{comment.email}</h5>
            </div>
            <div className="comment-body">
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
            </div>
        </div>
    );
};

export default Comment;