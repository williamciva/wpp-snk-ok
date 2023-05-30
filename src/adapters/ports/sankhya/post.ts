import { RequestBody, RequestBodyCodec, ResponseBodyCodec } from "@/core";
import { post } from "@/ports/sankhya";
import { pipe } from "fp-ts/function";
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'
import { getErrorMessage } from "@/helpers/get-error-message";

export const postRequestBody = (data: RequestBody, path: string, serviceName: string) => {
    return pipe(
        TE.tryCatch(
            async () => await post(data, path, serviceName),
            (error) => { throw error },
        ),
        TE.chain((responsBody) =>
            TE.fromEither(ResponseBodyCodec.decode(responsBody))
        )
        // E.fold(
        //     (errors) => { throw new Error(getErrorMessage(errors, ':::')) },
        //     (responseBody) => responseBody
        // )
    )()
}