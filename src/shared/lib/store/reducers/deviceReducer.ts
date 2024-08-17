import { DeviceAction, DeviceState, DeviceActionTypes } from "../types/device"

const initialState: DeviceState = {
    devices: [],
    loading: false,
    error: null,
    limit: 12,
    page: 1
}

export const deviceReducer = (state = initialState, action: DeviceAction):DeviceState => {
    switch (action.type) {
        case DeviceActionTypes.FETCH_DEVICES:
            return { ...state, loading: true}
        case DeviceActionTypes.FETCH_DEVICES_SUCCESS:
            return { ...state, loading: false, devices: action.payload }
        case DeviceActionTypes.FETCH_DEVICES_ERROR:
            return { ...state, loading: false, error: action.payload }
        case DeviceActionTypes.SET_DEVICES_PAGE:
            return { ...state, page: action.payload}
        default:
            return state
    }
}