import { post } from "@/ports/sankhya";
import { pipe } from "fp-ts/function";
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'
import { RequestBody } from "@/core/sankhya/types/request-body";
import { ResponseBody } from "@/core/sankhya/types/response-body";

export const postRequestBody = (data: RequestBody, path: string, serviceName: string): Promise<ResponseBody> => {
    return pipe(
        TE.tryCatch(
            async () => await post(data, path, serviceName),
            (error) => error,
        ),
        TE.fold(
            (error) => {
                console.error('Erro:', error);
                throw error;
            },
            (response) => T.task.of(response as ResponseBody)
        ),
    )()
}