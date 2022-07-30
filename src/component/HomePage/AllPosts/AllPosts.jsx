import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required, maxLengthCreator } from '../../utils/validators';
import { TextAreaField } from '../../FieldControls/FieldControls';

import Post from './Post/Post';

import style from './AllPosts.module.css';

const AllPosts = ({addPost, profilePage}) => {

    let addnNewPost = (value) => {
        addPost(value.postText)
    }

    let posts = profilePage.posts.map(item => {
        return (<Post key={item.id} id={item.id} postText={item.postText} like={item.likeCount} />)
    })

    const maxLength10 = maxLengthCreator(10);

    let newPostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div className={style.createPost}>
                    <Field name="postText" placeholder="add your post text..." component={TextAreaField} validate={[required, maxLength10]}/>
                    <button className={style.createPostBtn}>Create post</button>
                </div>
            </form>
        )
    }

    let NewPostReduxForm = reduxForm({form: "postForm"})(newPostForm);

    return(
        <div className={style.posts__list}>
            <h2>All posts</h2>
            <NewPostReduxForm onSubmit={addnNewPost} />
            { posts }
        </div>
    )
}

export default AllPosts;