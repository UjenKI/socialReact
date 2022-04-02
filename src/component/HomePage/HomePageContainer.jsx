import React, { Component, useEffect } from 'react';
import * as axios from 'axios';

import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import HomePage from './HomePage';
import { setProfilePage } from '../../redux/profileReducer';

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
    let params = useParams();

    
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
            .then(res => {
              props.setProfilePage(res.data);
            })
    }, [params.userId])

    return (
        <HomePage {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

export default connect(mapStateToProps, {setProfilePage})(HomePageContainer);
