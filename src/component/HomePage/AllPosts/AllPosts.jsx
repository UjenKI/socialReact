import React from 'react';

import Post from './Post/Post';

import style from './AllPosts.module.css';

const AllPosts = (props) => {

    let inputValue = React.createRef();

    let addPost = () => {
        props.postAdd()
    }

    let updateText = () => {
        let text = inputValue.current.value;
        props.updatePostText(text);
        console.log(props.profilePage)
    }

    let posts = props.profilePage.posts.map(item => {
        return (<Post id={item.id} postText={item.postText} like={item.likeCount} />)
    })
    return(
        <div className={style.posts__list}>
            <h2>All posts</h2>
            <div className={style.createPost}>
                <textarea onChange={updateText} ref={inputValue} value={props.profilePage.postText}  name="post"  cols="30" rows="10" ></textarea>
                <button onClick={addPost}  className={style.createPostBtn}>Create Post</button>
            </div>
            { posts }
        </div>
    )
}

export default AllPosts;