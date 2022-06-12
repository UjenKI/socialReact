import { usersAPI } from '../api/api';
import { sortIdObjKey } from '../component/utils/objHelpers';

const FOLLOW = 'socialNetwork/users/FOLLOW'; 
const UNFOLLOW = 'socialNetwork/users/UNFOLLOW'; 
const SET_USERS = 'socialNetwork/users/SET_USERS';
const SET_TOTAL_COUNT = 'socialNetwork/users/SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'socialNetwork/users/SET_CURRENT_PAGE';
const SET_TOGGLE_FETCHING = 'socialNetwork/users/SET_TOGGLE_FETCHING';
const SET_FOLLOWING_PROGRESS = 'socialNetwork/users/SET_FOLLOWING_PROGRES';

let initialState = {
    users: [],
    totalCount: 0,
    currentPage: 1,
    pageSize: 3,
    isFetching: true,
    inFollowingProgres: []
}

let usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: sortIdObjKey(state.users, action.userId, "id", { followed: true })
                // users: state.users.map((user) => {
                //     if(user.id === action.userId){
                //         return {
                //             ...user,
                //             followed: true
                //         }
                //     }
                //     return user
                // })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: sortIdObjKey(state.users, action.userId, "id", { followed: false })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_FOLLOWING_PROGRESS: {
            return {
                ...state,
                inFollowingProgres: action.isFetching ? 
                [...state.inFollowingProgres, action.uId] :
                state.inFollowingProgres.filter(id => id !== action.uId)
            }
        }
        default: {
            return state
        }
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setToggleFetching = (isFetching) => ({type: SET_TOGGLE_FETCHING, isFetching});
export const setFollowingProgress = (isFetching, uId) => ({type: SET_FOLLOWING_PROGRESS, isFetching, uId});

export const getUsers = (currentPage = 1, pageSize = 5) => async (dispatch) => {
        dispatch(setToggleFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        // usersAPI.getUsers(currentPage, pageSize).then((data) => {
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
                dispatch(setToggleFetching(false));
            // });
    
}

export const followUnfollowFlow = async (userId, actionType, apiType, dispatch) => {
    dispatch(setFollowingProgress(true, userId))
    let res = await apiType(userId);
    if(res.data.resultCode === 0){
        dispatch(actionType(userId))
    }
    dispatch(setFollowingProgress(false, userId))
}

export const follow = (userId) => (dispatch) => {
        // dispatch(setFollowingProgress(true, userId))
        // let res = await usersAPI.follow(userId);
        //     if(res.data.resultCode === 0){
        //         dispatch(followSuccess(userId))
        //     }
        //     dispatch(setFollowingProgress(false, userId))
    followUnfollowFlow(userId, followSuccess, usersAPI.follow, dispatch)
}

export const unFollow = (userId) => (dispatch) => {
    followUnfollowFlow(userId, unFollowSuccess, usersAPI.unfollow, dispatch)
}

export default usersReducer;