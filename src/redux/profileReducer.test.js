import React from 'react';

import profilePageReducer, { addPost, setProfileId } from './profileReducer';

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

it('last post message must be ... ', () => {
    let action = addPost('last post');

    let newState = profilePageReducer(initialState, action);

    expect(newState.posts[4].postText).toBe('last post')
})

it('check rightly profile id', () => {
    let action = setProfileId(2);

    let newState = profilePageReducer(initialState, action)

    expect(newState.profileId).toBe(2)
})