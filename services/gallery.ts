import axios from "axios"
import { ENDPOINTS } from "./api"

interface IGalleryListReq {
    limit: number,
    offset: number,
}

interface IGalleryListRes {
    success: boolean,
    message: string,
    offset: number,
    limit: number,
    photos: IPhoto[]
}

interface IGalleryListByID {
    id: number
}

interface IPhoto {
    description: string,
    url: string,
    title: string,
    id: number,
    user: number,
}

interface IGalleryIdRes {
    success: string,
    message: string,
    photo: IPhoto
}

export const getGalleryList = async (arg: IGalleryListReq) => {

    try {

        const { data } = await axios.get<IGalleryListRes>("https://api.slingacademy.com/v1/sample-data/photos", { params: arg })

        // console.log(data)

        return data

    } catch (error) {

        console.log(error);

    }

}

export const getGalleryById = async (arg: IGalleryListByID) => {
    try {

        const { data } = await axios.get<IGalleryIdRes>(`https://api.slingacademy.com/v1/sample-data/photos/${arg.id}`)

        return data

    } catch (err) {
        console.log(err)
    }
}