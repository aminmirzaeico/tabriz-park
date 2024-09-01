import axios from "axios"

const token = localStorage.getItem("token");

export const getAll = (u) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    };
    return axios.get(u, {headers})
}

export const getById = (u, id) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    };
    return axios.get(`${u}${id}`, {headers})
}

export const post = (u, person) => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };
    return axios.post(u, person, {headers})
}

export const put = (u, id, person) => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    }
    return axios.put(`${u}${id}`, person, {headers})
}

export const del = (u, id) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    };
    return axios.delete(`${u}${id}`, {headers})
}