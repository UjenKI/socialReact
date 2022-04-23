import React, { Component } from 'react';

import * as axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header';
import { getAuth } from '../../redux/authReducer';
import { compose } from 'redux';

class HeaderContainer extends Component {

    componentDidMount(){
        // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials: true})
        //     .then(res => {
        //         if(res.data.resultCode === 0) {
        //             let {id, email, login} = res.data.data;
        //             this.props.setAuthUser(id, email, login);
        //         }
        //     })
        this.props.getAuth()

    }

    render(){
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

// export default connect(mapStateToProps, {getAuth})(HeaderContainer)

export default compose(
    connect(mapStateToProps, {getAuth})
)(HeaderContainer)