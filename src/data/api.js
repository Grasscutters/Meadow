import axios from "axios";

const API = () => {
    return axios.create({
        baseURL: `http://localhost:6896/api/`,
    });
}

export default API;