const initialState = {
    allUsers: [],
    loadAllUsers: false,
    errAllUsers: false,
    detailUser: {},
    loadDetailUser: false,
    errDetailUser: false
}

export default function userReducer(state=initialState, action) {
    switch (action.type) {
        case "GET_ALL_USERS_PENDING":
            return {...state, loadAllUsers: true, errAllUsers: false}
        case "GET_ALL_USERS_FULFILLED":
            return {...state, loadAllUsers: false, errAllUsers: false ,allUsers: action.payload.data}
        case "GET_ALL_USERS_REJECTED":
            return {...state, loadAllUsers: false, errAllUsers: true}

        case "GET_DETAIL_USER_PENDING":
            return{...state, loadDetailUser: true, errDetailUser: false}
        case "GET_DETAIL_USER_FULFILLED":
            return {...state, loadDetailUser: false, errDetailUser: false, detailUser: action.payload.data}
        case "GET_DETAIL_USER_REJECTED":
            return {...state, loadDetailUser: false, errDetailUser: true}
        
        default:
            return state
    }
}