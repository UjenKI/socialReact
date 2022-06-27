import React from 'react';

import style from './Post.module.css';

const Post = ({postText, like}) => {
    return (
        <div className={style.post__item}>
            <h2>{postText}</h2>
            <span>{like}</span>
        </div>
    )
}

export default Post;