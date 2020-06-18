import axios from 'axios'

export function GET_ALL_USERS() {
    return {
        type: "GET_ALL_USERS",
        payload: axios.get(`https://jsonplaceholder.typicode.com/users`)
    }
}
export function GET_DETAIL_USER(id) {
    return {
        type: "GET_DETAIL_USER",
        payload: axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
}