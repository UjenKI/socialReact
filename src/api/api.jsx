  import * as axios from 'axios';
//   import FormData from ''

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
    },
    getProfileStatus: (userId) => {
        return instance.get(`/profile/status/${userId}`)
    },
    updateProfileStatus: (status) => {
        return instance.put(`/profile/status`, {status: status})
    },
    updateUserPhoto: (photoFile) => {
        const formData = new FormData();
        formData.append("image", photoFile)

        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    },
    updateProfileInfo: (profileInfo) => {
        return instance.put('/profile', profileInfo)
    }
}

export const authAPI = {
    me: () => {
        return instance.get(`/auth/me`)
    },
    login: (email, password, rememberMe = false, captcha = null) => {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
    },
    logout: () => {
        return instance.delete(`/auth/login`)
    }
}

export const getCaptchaUrl = {
    getCaptcha: () => {
        return instance.get(`security/get-captcha-url`);
    }
}

