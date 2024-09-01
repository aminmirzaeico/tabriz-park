import axios from "axios"

export const sendCode = (data) => {
    return axios.post("user/send-code/", data)
}

export const verifyCode = (data) => {
    return axios.post("user/verify-code/", data)
}

export const logout = (data) => {
    return axios.post("user/logout/", data)
}