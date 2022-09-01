import React, { Component } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import Profile from './Profile';
import { getStatusProfile, updateProfileStatus, updateProfilePhoto, updateProfileInfo } from '../../../redux/profileReducer';

class ProfileContainer extends Component {
    componentDidMount(){
        const {getStatusProfile, profilePage} = this.props;
        getStatusProfile(profilePage.profileId)

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.profilePage.profileId != prevProps.profilePage.profileId){
            const {getStatusProfile, profilePage} = this.props;
            getStatusProfile(profilePage.profileId)
            console.log('CHANGED ID - COMPONENT UPDATE')
        }
    }

    render(){
        return(
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export default compose(
    connect(mapStateToProps, { getStatusProfile, updateProfileStatus, updateProfilePhoto, updateProfileInfo })
)(ProfileContainer)