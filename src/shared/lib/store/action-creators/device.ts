import { Dispatch } from "redux"
import DeviceService from "../../../api/DeviceService"
import { DeviceAction, DeviceActionTypes } from "../types/device"
import { getPageCount } from "../../../../entities/Device/lib/utils/pages"

export const fetchDevices = (limit = 12, page = 1, setTotalPages: (pages: number)=> void):any => {
    return async (dispatch: Dispatch<DeviceAction>) => {
        try {
            dispatch({type: DeviceActionTypes.FETCH_DEVICES})
            const response = await DeviceService.getAll(limit, page)
            setTotalPages(getPageCount(response.headers['x-total-count'], limit))
            dispatch({ type: DeviceActionTypes.FETCH_DEVICES_SUCCESS, payload: response.data })
        } catch(e) {
            dispatch({ type: DeviceActionTypes.FETCH_DEVICES_ERROR, payload: 'Произошла ошибка при загрузке каталога!' })
        }
    }
}

export const setDevicesPage = (page: number): DeviceAction => {
    return {type: DeviceActionTypes.SET_DEVICES_PAGE, payload: page}
}