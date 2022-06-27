import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { AuthRedirectComponent } from '../../hoc/withAuthRedirect';
import HomePage from './HomePage';
import { getProfile, getStatusProfile } from '../../redux/profileReducer';
import { compose } from 'redux';

const HomePageContainer = ({auth, getProfile}, props) => {
    let {userId} = useParams();

    if(!userId){
        userId = auth.id
    }
    
    useEffect(() => {
        getProfile(userId)
        getStatusProfile(userId)
    }, [userId])

    return (
        <HomePage {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        auth: state.auth
    }
}

export default compose(
    connect(mapStateToProps, { getProfile }),
    AuthRedirectComponent
)(HomePageContainer)
