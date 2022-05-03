import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Post from './Post/Post';

import style from './AllPosts.module.css';

const AllPosts = (props) => {

    let inputValue = React.createRef();

    let addPost = (value) => {
        props.addPost(value.postText)
        console.log(value)
    }

    // let updateText = () => {
    //     let text = inputValue.current.value;
    //     props.updatePostText(text);
    //     console.log(props.profilePage)
    // }

    let posts = props.profilePage.posts.map(item => {
        return (<Post id={item.id} postText={item.postText} like={item.likeCount} />)
    })

    let newPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div className={style.createPost}>
                    <Field name="postText" placeholder="add your post text..." component="textarea" />
                    <button className={style.createPostBtn}>Create post</button>
                </div>
            </form>
        )
    }

    let NewPostReduxForm = reduxForm({form: "postForm"})(newPostForm);

    return(
        <div className={style.posts__list}>
            <h2>All posts</h2>
            <NewPostReduxForm onSubmit={addPost} />
            { posts }
        </div>
    )
}

export default AllPosts;