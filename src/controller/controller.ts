import axios from "axios";


export const getImages = ({ page = 1, query = "" }) => {
    const config = {
        method: 'get',
        url: `https://rumor-backend.vercel.app/api/v1/getImages?page=${page}&query=${query}`,
        headers: {}
    };

    return axios(config)
}