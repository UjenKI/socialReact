import { authAPI } from '../api/api';

import { stopSubmit } from 'redux-form';
 
const SET_AUTH_USER = 'SET_AUTH_USER';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

let authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUser = (id, email, login, isAuth) => ({type: SET_AUTH_USER, data: {id, email, login, isAuth}})

export const getAuth = () => {
    return (dispatch) => {
        authAPI.me().then(res => {
            if(res.data.resultCode === 0) {
                let {id, email, login} = res.data.data;
                dispatch(setAuthUser(id, email, login, true))
            }
        })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(res => {
        if(res.data.resultCode === 0) {
            console.log(res.data.messages)
            dispatch(getAuth())
        } else {
            console.log(res.data.messages)
            let message = res.data.messages.length > 0 ? res.data.messages[0] : {_error: 'Invalid input data'}
            dispatch(stopSubmit("loginForm", message))
        }
    })
}

export const logout = () => (dispatch => {
    authAPI.logout().then(res => {
        if(res.data.resultCode === 0){
            dispatch(setAuthUser(null, null, null, false))
        }
    })
})

export default authReducer;