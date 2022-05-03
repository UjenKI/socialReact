import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
// const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';
const SET_STATUS = 'SET_STATUS';
const SET_PROFILE_ID = 'SET_PROFILE_ID';

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
        // case UPDATE_POST_TEXT: {
        //     return {
        //         ...state,
        //         postText: action.postText
        //     }
        // }
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
// export const updatePostTextAC = (postText) => ({type: UPDATE_POST_TEXT, postText});
export const setProfilePage = (profile) => ({type: SET_PROFILE_PAGE, profile });
export const setProfileSatus = (status) => ({type: SET_STATUS, status});
export const setProfileId = (profileId) => ({type: SET_PROFILE_ID, profileId});

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then(res => {
          dispatch(setProfileId(userId));
          dispatch(setProfilePage(res.data));
        })
    }
}

export const getStatusProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
        .then(res => {
            console.log(userId)
            console.log(res)
            dispatch(setProfileSatus(res.data))
        })
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setProfileSatus(status))
            }
        })
    }
}

export default profilePageReducer;