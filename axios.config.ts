import axios from 'axios'

const onRequest = (config:any) => {

    config.baseURL = process.env.API_URL
    return config
}

const onRequestError = () => {

}

axios.interceptors.response.use(onRequest, onRequestError);

const onResponse = () => {

}

const onResponseError = () => {

}