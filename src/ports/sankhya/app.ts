import { getJSessionId } from '@/adapters/core/sankhya/functions/jsession'
import { env } from '@/helpers'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { pipe } from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'

const SERVER: string = env('SERVER')
const CONFIG: AxiosRequestConfig = {
    headers: {
        "Cookie": `JSESSIONID=${getJSessionId()}`
    }
}


export const post = async (
    data: unknown,
    path: string,
    serviceName: string
): Promise<unknown> => {

    const postRequest = (): TE.TaskEither<Error, AxiosResponse<unknown>> => {
        const url = new URL(
            SERVER +
            path +
            `?serviceName=${serviceName}&outputType=json`
        ).href;

        return TE.tryCatch(
            () => axios.post(url, data, CONFIG),
            (error) => new Error(`Request failed: ${error}`)
        );
    };

    return pipe(
        postRequest(),
        TE.fold(
            (error) => {
                console.error('Erro:', error);
                throw error
            },
            (response) => {
                if (response.statusText === 'OK') {
                    return T.task.of(response.data);
                }
                throw new Error(
                    `Request success but status is not '200 - OK': ${response.status} - ${response.statusText}`
                );
            }
        )
    )();
};