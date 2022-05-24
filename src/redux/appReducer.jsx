import { getAuth } from '../redux/authReducer';

const SET_INITIALIZE_APP = 'SET_INITIALIZE_APP'

let initialState = {
    initialized: false
}

let appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_INITIALIZE_APP: {
            return {
                ...state,
                initialized: true
            }
        }
        default: {
            return state
        }
    }
}

export const setInitializeApp = () => ({type: SET_INITIALIZE_APP});

export const initializeApp = () => (dispatch) => {
        let promise = dispatch(getAuth())
        Promise.all([promise]).then(() => {
            dispatch(setInitializeApp())
        })
}

export default appReducer