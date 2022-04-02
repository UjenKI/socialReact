import React from 'react';

import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.post__item}>
            <h2>{props.postText}</h2>
            <span>{props.like}</span>
        </div>
    )
}

export default Post;