import axios from "axios";

export default class DeviceService {
    static async getAll(limit = 12, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
            params: {
                _limit: limit,
                _page: page
            }
        })
        return response
    }
}