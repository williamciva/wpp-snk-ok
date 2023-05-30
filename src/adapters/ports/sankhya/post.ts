import { RequestBody, ResponseBody, ResponseBodyCodec } from "@/core";
import { post } from "@/ports/sankhya";
import { pipe } from "fp-ts/function";
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'
import { getErrorMessage } from "@/helpers/get-error-message";

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
            (response) => TE.fromEither(ResponseBodyCodec.decode(response))
        ),
        TE.fold(
            (errors) => { throw new Error(getErrorMessage(errors, ':::')) },
            (responseBody) => T.task.of(responseBody)
        )
    )()
}