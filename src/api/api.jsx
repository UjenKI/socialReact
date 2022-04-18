import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '24654f97-fc37-4f28-b21d-474010a151af'
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow: (userId) => {
        return instance.post(`/follow/${userId}`)
    },
    unfollow: (userId) => {
        return instance.delete(`/follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`/profile/${userId}`)
    }
}

export const authAPI = {
    me: () => {
        return instance.get(`/auth/me`)
    }
}

