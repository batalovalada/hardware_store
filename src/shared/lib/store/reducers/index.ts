import { combineReducers } from "redux";
import { deviceReducer } from "./deviceReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    device: deviceReducer,
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>