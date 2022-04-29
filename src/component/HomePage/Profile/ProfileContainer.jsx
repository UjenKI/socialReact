import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import Profile from './Profile';
import { getStatusProfile, updateProfileStatus } from '../../../redux/profileReducer';

class ProfileContainer extends Component {
    componentDidMount(){
        this.props.getStatusProfile(this.props.profilePage.profileId)
        // console.log(this.props)

    }

    render(){
        return(
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export default compose(
    connect(mapStateToProps, { getStatusProfile, updateProfileStatus })
)(ProfileContainer)