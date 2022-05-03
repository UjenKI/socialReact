import React from 'react';
import { connect } from 'react-redux';

import AllPosts from './AllPosts';

import { addPost } from '../../../redux/profileReducer';

const mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}

const AllPostsContainer = connect(mapStateToProps, { addPost })(AllPosts);
export default AllPostsContainer;
