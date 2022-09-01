import { authAPI, getCaptchaUrl } from '../api/api';

import { stopSubmit } from 'redux-form';
 
const SET_AUTH_USER = 'socialNetwork/auth/SET_AUTH_USER';
const GET_CAPTCHA_URL = 'socialNetwork/auth/GET_CAPTCHA_URL'

let initialState = {
    id: null,
    email: null, 
    login: null,
    isAuth: false,
    captchaUrl: null
}

let authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.payload 
            }
        }
        default: {
            return state
        }
    }
}

export const setAuthUser = (id, email, login, isAuth, captchaUrl) => ({type: SET_AUTH_USER, data: {id, email, login, isAuth, captchaUrl}});
export const setCaptchaUrl = (captchaUrl) => ({type: GET_CAPTCHA_URL, payload: captchaUrl})

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

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe, captcha)
    // authAPI.login(email, password, rememberMe).then(res => {
        console.log(res.data);
        if(res.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            if(res.data.resultCode === 10) {
                console.log('incorrect anti bot symbols')
                dispatch(getCaptcha())
            }
            let message = res.data.messages.length > 0 ? res.data.messages[0] : {_error: 'Invalid input data'}
            dispatch(stopSubmit("loginForm", message))
        }
    // })
}

export const logout = () => async (dispatch) => {
    let res = await authAPI.logout()
        if(res.data.resultCode === 0){
            dispatch(setAuthUser(null, null, null, false))
        }
}

export const getCaptcha = () => async (dispatch) => {
    let resp = await getCaptchaUrl.getCaptcha()
    let captchaUrl = resp.data.url;
    console.log('thunk')
    dispatch(setCaptchaUrl(captchaUrl));
}

export default authReducer;