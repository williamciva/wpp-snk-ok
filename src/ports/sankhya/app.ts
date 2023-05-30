import { getJsessionId } from '@/adapters/core/sankhya/functions/jsession'
import { env } from '@/helpers'
import axios, { AxiosRequestConfig } from 'axios'
import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'

const SERVER: string = env('SERVER')
const CONFIG: AxiosRequestConfig = {

}

export type Post = (data: unknown, path: string, serviceName: string) => Promise<unknown>

export const post: Post = async (data, path, serviceName) => {
    return pipe(
        TE.tryCatch(
            () => axios.post(
                new URL(SERVER + path + `?serviceName=${serviceName}&mgeSession${getJsessionId()}&outputType=json`).href,
                data,
                CONFIG
            ),
            () => TE.throwError,
        ),
        TE.fold(
            (error) => { throw error },
            (response) => { if (response.statusText === 'OK') { return response.data } throw new Error(response.status + ' - ' + response.statusText) }
        )
    )()
}