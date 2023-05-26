import { JSESSIONID } from '@/core'
import { Body, } from '@/core/sankhya/types/body'
import { env } from '@/helpers'
import axios, { AxiosRequestConfig } from 'axios'

const SERVER: string = env('SERVER')
const CONFIG: AxiosRequestConfig = {

}

type Post = (data: Body, path: string, serviceName: string) => Promise<any>

export const post: Post = async (data, path, serviceName) => {

    try {
        const response = await axios.post(
            new URL(SERVER + path + `?serviceName=${serviceName}&mgeSession${JSESSIONID}&outputType=json`).href,
            data,
            CONFIG
        )

        if (response.statusText === 'OK') {

            return response.data

        } else {

            throw new Error(response.status + ' - ' + response.statusText)

        }

    } catch (error) {

        throw new Error("Impossible parser response.\n" + error)

    }

}
