import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import profilePageReducer from './profileReducer';
import chatReducer from './chatReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    chatPage: chatReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;