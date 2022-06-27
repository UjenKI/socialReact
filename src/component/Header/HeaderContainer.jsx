import React, { Component } from 'react';

import * as axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header';
import { logout } from '../../redux/authReducer';
import { compose } from 'redux';

class HeaderContainer extends Component {
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
    connect(mapStateToProps, { logout })
)(HeaderContainer)