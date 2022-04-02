import React from 'react';
import { connect } from 'react-redux';

import AllPosts from './AllPosts';

import { addPostAC, updatePostTextAC } from '../../../redux/profileReducer';

const mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postAdd: () => {
            dispatch(addPostAC())
        },
        updatePostText: (postText) => {
            dispatch(updatePostTextAC(postText))
        }
    }
}

const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPosts);
export default AllPostsContainer;
