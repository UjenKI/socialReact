import { profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'socialNetwork/profile/ADD_POST';
const SET_PROFILE_PAGE = 'socialNetwork/profile/SET_PROFILE_PAGE';
const SET_STATUS = 'socialNetwork/profile/SET_STATUS';
const SET_PROFILE_ID = 'socialNetwork/profile/SET_PROFILE_ID';
const UPDATE_PROFILE_PHOTO = 'socialNetwork/profile/UPDATE_PROFILE_PHOTO';

let initialState = {
    posts: [
        {id: 1, postText: "hi, it's my first post)", likeCount: 1},
        {id: 2, postText: "HAve some news for u!", likeCount: 3},
        {id: 3, postText: "look at this > (.)(.) ...", likeCount: 2},
        {id: 4, postText: "hi, it's my last post)", likeCount: 5},
    ],
    profile: null,
    status: '',
    // ----------
    profileId: null
    // ------------
}

let profilePageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                postText: action.postText,
                likeCount: 7
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_PROFILE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos }
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PROFILE_PAGE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_PROFILE_ID: {
            return {
                ...state,
                profileId: +action.profileId
            }
        }
        default:{
            return state
        }
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText});
export const updateProfilePhotoAC = (photos) => ({type: UPDATE_PROFILE_PHOTO, photos})
export const setProfilePage = (profile) => ({type: SET_PROFILE_PAGE, profile });
export const setProfileSatus = (status) => ({type: SET_STATUS, status});
export const setProfileId = (profileId) => ({type: SET_PROFILE_ID, profileId});

export const getProfile = (userId) => async (dispatch) => {
    let res = await profileAPI.getProfile(userId)
          dispatch(setProfileId(userId));
          dispatch(setProfilePage(res.data));
}

export const getStatusProfile = (userId) => async (dispatch) => {
        let res = await profileAPI.getProfileStatus(userId)
            dispatch(setProfileSatus(res.data))
}

export const updateProfileStatus = (status) => async (dispatch) => {
        let res = await profileAPI.updateProfileStatus(status)
            if(res.data.resultCode === 0){
                dispatch(setProfileSatus(status))
            }
}

export const updateProfilePhoto = (photos) => async (dispatch) => {
    let res = await profileAPI.updateUserPhoto(photos)
        if(res.data.resultCode === 0) {
            console.log(res)
            dispatch(updateProfilePhotoAC(photos))
        }
}

export const updateProfileInfo = (profileInfo) => async (dispatch, getState) => {
    let res = await profileAPI.updateProfileInfo(profileInfo)
    const profileId = getState().auth.id;
    console.log(res)
    if(res.data.resultCode === 0) {
        dispatch(getProfile(profileId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: res.data.message[0]}));
        return Promise.reject(res.data.message[0]);
    }
}

export default profilePageReducer;