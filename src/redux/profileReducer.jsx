const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE';

let initialState = {
    posts: [
        {id: 1, postText: "hi, it's my first post)", likeCount: 1},
        {id: 2, postText: "HAve some news for u!", likeCount: 3},
        {id: 3, postText: "look at this > (.)(.) ...", likeCount: 2},
        {id: 4, postText: "hi, it's my last post)", likeCount: 5},
    ],
    postText: '',
    profile: null
}

let profilePageReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                postText: state.postText,
                likeCount: 7
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                postText: ''
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                postText: action.postText
            }
        }
        case SET_PROFILE_PAGE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:{
            return state
        }
    }
}

export const addPostAC = () => ({type: ADD_POST});
export const updatePostTextAC = (postText) => ({type: UPDATE_POST_TEXT, postText});
export const setProfilePage = (profile) => ({type: SET_PROFILE_PAGE, profile })

export default profilePageReducer;