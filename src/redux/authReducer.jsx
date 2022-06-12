import { authAPI } from '../api/api';

import { stopSubmit } from 'redux-form';
 
const SET_AUTH_USER = 'socialNetwork/auth/SET_AUTH_USER';

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

export const getAuth = () => async (dispatch) => {
    let res = await authAPI.me();
        // authAPI.me().then(res => {
            if(res.data.resultCode === 0) {
                let {id, email, login} = res.data.data;
                dispatch(setAuthUser(id, email, login, true))
            }
        // })
    // }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe)
    // authAPI.login(email, password, rememberMe).then(res => {
        if(res.data.resultCode === 0) {
            dispatch(getAuth())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : {_error: 'Invalid input data'}
            dispatch(stopSubmit("loginForm", message))
        }
    // })
}

export const logout = () => async (dispatch) => {
    let res = await authAPI.logout()
    // authAPI.logout().then(res => {
        if(res.data.resultCode === 0){
            dispatch(setAuthUser(null, null, null, false))
        }
    // })
}

export default authReducer;