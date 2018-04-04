import {publicPath} from '../config'
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: publicPath,
    /* other custom settings */
});

export default axiosInstance;