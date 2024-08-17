export interface IUserRegister {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface UserState {
    isAuth: boolean;
    user: IUserLogin | IUserRegister | null;
    error: null | string;
    loading: boolean;
}

export enum UserActionTypes {
    SET_LOGIN = 'SET_LOGIN',
    SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS',
    SET_LOGIN_ERROR = 'SET_LOGIN_ERROR',
    SET_REGISTER = 'SET_REGISTER',
    SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS',
    SET_REGISTER_ERROR = 'SET_REGISTER_ERROR',
    LOGOUT = 'LOGOUT',
}

interface SetLoginAction {
    type: UserActionTypes.SET_LOGIN;

}

interface SetLoginSuccessAction {
    type: UserActionTypes.SET_LOGIN_SUCCESS;
    payload: IUserLogin | IUserRegister;

}

interface SetLoginErrorAction {
    type: UserActionTypes.SET_LOGIN_ERROR;
    payload: string;

}

interface SetRegisterAction {
    type: UserActionTypes.SET_REGISTER;

}

interface SetRegisterSuccessAction {
    type: UserActionTypes.SET_REGISTER_SUCCESS;
    payload: IUserLogin | IUserRegister;

}

interface SetRegisterErrorAction {
    type: UserActionTypes.SET_REGISTER_ERROR;
    payload: string;

}

interface LogoutAction {
    type: UserActionTypes.LOGOUT;

}




export type UserAction = SetLoginAction
    | SetLoginSuccessAction
    | SetLoginErrorAction
    | SetRegisterAction
    | SetRegisterSuccessAction
    | SetRegisterErrorAction
    | LogoutAction
