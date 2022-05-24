import React from 'react';

import { connect } from 'react-redux';
import { AuthRedirectComponent } from '../../hoc/withAuthRedirect';
import { setUsers, setToggleFetching, setTotalCount, setCurrentPage, follow, unFollow, setFollowingProgress, getUsers } from '../../redux/usersReducer';
import { setProfilePage } from '../../redux/profileReducer';
import { getUsersSelector } from '../../redux/selectors';

import UsersAPI from './UsersAPI';
import { compose } from 'redux';

const UsersContainer = (props) => {
    return (
        <UsersAPI {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        usersPage: getUsersSelector(state)
    }
}

// let withAuthRedirectComponent = AuthRedirectComponent(UsersContainer)

// export default connect(mapStateToProps, {
//     follow,
//     unFollow,
//     setUsers,
//     setTotalCount,
//     setCurrentPage,
//     setToggleFetching,
//     setProfilePage,
//     setFollowingProgress,
//     getUsers
// })(withAuthRedirectComponent);

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        setTotalCount,
        setCurrentPage,
        setToggleFetching,
        setProfilePage,
        setFollowingProgress,
        getUsers
    }),
    AuthRedirectComponent
)(UsersContainer);