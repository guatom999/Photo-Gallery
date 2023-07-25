import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

axios.interceptors.request.use((requestConfig: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    requestConfig.baseURL = process.env.API_URL
    return requestConfig;
}, (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
})

axios.interceptors.response.use((responseConfig: AxiosResponse): AxiosResponse => {
    return responseConfig
}, (error: AxiosError): AxiosError => {
    return error
});
