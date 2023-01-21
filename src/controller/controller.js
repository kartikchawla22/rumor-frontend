import axios from "axios";


export const getImages = ({ page = 1, query = "" }) => {
    const config = {
        method: 'get',
        url: `http://localhost:8000/api/v1/getImages?page=${page}&query=${query}`,
        headers: {}
    };

    return axios(config)
}