import { createSelector } from 'reselect';

const getUsers = (state) => {
    return state.usersPage
}

export const getUsersSelector = createSelector(getUsers, (inf) => {
    return inf
})