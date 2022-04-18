import React, { Component, useEffect } from 'react';

// import * as axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

// import { profileAPI } from '../../api/api';
import { AuthRedirectComponent } from '../../hoc/withAuthRedirect';
import HomePage from './HomePage';
import { getProfile } from '../../redux/profileReducer';


// class HomePageContainer extends Component {
//     componentDidMount(){
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(res => {
//               this.props.setProfilePage(res.data);
//             })
//     }

//     render(){
//         return (
//             <HomePage {...this.props} />
//         )
//     }
// }

const HomePageContainer = (props) => {
    let {userId} = useParams();

    if(!userId){
        userId = props.auth.id
    }
    
    useEffect(() => {
        // profileAPI.getProfile(userId)
        //     .then(res => {
        //       props.setProfilePage(res.data);
        //     })
        props.getProfile(userId)
    }, [userId])

    return (
        <HomePage {...props} />
    )
}

let withAuthRedirectComponent = AuthRedirectComponent(HomePageContainer)

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getProfile })(withAuthRedirectComponent);
