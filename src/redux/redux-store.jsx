import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

import profilePageReducer from './profileReducer';
import chatReducer from './chatReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    chatPage: chatReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;