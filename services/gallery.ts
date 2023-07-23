import axios from "axios"
import { ENDPOINTS } from "./api"

interface IGalleryListReq {
    limit: number,
    offset: number,
}

interface IGalleryListByID {
    id: number
}

export const getGalleryList = async (arg: IGalleryListReq) => {

    try {

        const { data } = await axios.get("https://api.slingacademy.com/v1/sample-data/photos", { params: arg })

        // console.log(data)

        return data

    } catch (error) {

        console.log(error);

    }

}

export const getGalleryById = async (arg: IGalleryListByID) => {
    try {

        const { data } = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${arg.id}`)

        return data

    } catch (err) {
        console.log(err)
    }
}