import React from 'react';

import { connect } from 'react-redux';
import { setUsers, setToggleFetching, setTotalCount, setCurrentPage, follow, unFollow, setFollowingProgress, getUsers } from '../../redux/usersReducer';
import { setProfilePage } from '../../redux/profileReducer';

import UsersAPI from './UsersAPI';

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    setToggleFetching,
    setProfilePage,
    setFollowingProgress,
    getUsers
})(UsersAPI);

export default UsersContainer;