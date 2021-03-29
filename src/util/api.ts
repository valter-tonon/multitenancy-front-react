import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://129.146.170.175/api/'/*process.env.REACT_APP_API_START*/
})