import { IDevice } from "../../../types/IDevice";

export interface DeviceState {
    devices: IDevice[];
    loading: boolean;
    error: string | null;
    limit: number;
    page: number;
}

export enum DeviceActionTypes {
    FETCH_DEVICES = 'FETCH_DEVICES',
    FETCH_DEVICES_SUCCESS = 'FETCH_DEVICES_SUCCESS',
    FETCH_DEVICES_ERROR = 'FETCH_DEVICES_ERROR',
    SET_DEVICES_PAGE = 'SET_DEVICES_PAGE',
}

interface FetchDeviceAction {
    type: DeviceActionTypes.FETCH_DEVICES;

}

interface FetchDeviceSuccessAction {
    type: DeviceActionTypes.FETCH_DEVICES_SUCCESS;
    payload: IDevice[];

}

interface FetchDeviceErrorAction {
    type: DeviceActionTypes.FETCH_DEVICES_ERROR;
    payload: string;

}

interface SetDevicesPageAction {
    type: DeviceActionTypes.SET_DEVICES_PAGE;
    payload: number;

}

export type DeviceAction = FetchDeviceAction | FetchDeviceSuccessAction | FetchDeviceErrorAction | SetDevicesPageAction

