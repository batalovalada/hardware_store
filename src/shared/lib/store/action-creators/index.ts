import * as DeviceActionCreators from './device'
import * as UserActionCreators from './user'

export default {
    ...DeviceActionCreators,
    ...UserActionCreators
}