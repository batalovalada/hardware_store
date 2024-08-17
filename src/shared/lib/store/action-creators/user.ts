import { Dispatch } from "redux";
import { IUserLogin, IUserRegister, UserActionTypes, UserAction } from "../types/user";

export const register = (data: IUserLogin | IUserRegister) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.SET_REGISTER })
            localStorage.setItem("user", JSON.stringify(data))
            dispatch({ type: UserActionTypes.SET_REGISTER_SUCCESS, payload: data})
        } catch (e) {
            dispatch({ type: UserActionTypes.SET_REGISTER_ERROR, payload: 'Произошла ошибка при авторизации пользователя!' })
        }
    }
}

export const login = (data: IUserLogin | IUserRegister) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({ type: UserActionTypes.SET_LOGIN })
            localStorage.setItem("user", JSON.stringify(data))
            dispatch({ type: UserActionTypes.SET_LOGIN_SUCCESS, payload: data})
        } catch (e) {
            dispatch({ type: UserActionTypes.SET_LOGIN_ERROR, payload: 'Произошла ошибка при авторизации пользователя!' })
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        localStorage.removeItem("user");
        dispatch({type: UserActionTypes.LOGOUT})
    }
}