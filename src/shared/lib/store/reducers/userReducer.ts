import { UserState, UserAction, UserActionTypes } from "../types/user"

//const user: string = localStorage.getItem('user') || ''
//const userObj = JSON.parse(user)

const initialState: UserState = {
        isAuth: false,
        user: null,
        error: null,
        loading: false,
    }

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_LOGIN:
            return { ...state, loading: true }
        case UserActionTypes.SET_LOGIN_SUCCESS:
            return { ...state, loading: false, user: action.payload, isAuth: true }
        case UserActionTypes.SET_LOGIN_ERROR:
            return { ...state, loading: false, error: action.payload }
        case UserActionTypes.SET_REGISTER:
            return { ...state, loading: true }
        case UserActionTypes.SET_REGISTER_SUCCESS:
            return { ...state, loading: false, user: action.payload, isAuth: true }
        case UserActionTypes.SET_REGISTER_ERROR:
            return { ...state, loading: false, error: action.payload }
        case UserActionTypes.LOGOUT:
            return { ...state, isAuth: false, user: null } 
        default:
            return state
    }
}