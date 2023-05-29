import { pipe } from 'fp-ts/lib/function'
import { validateType } from '@/config/testes/fixtures/validateType'
import * as TE from 'fp-ts/TaskEither'
import { RequestBodyCodec, requestBodyMessage } from './request-body'

const requestBodyValid = {
    requestBody: {
        NOMUSU: {
            $: "USERNAME"
        },
        INTERNO: {
            $: "@p@ssW0rd"
        }
    }
}

const requestBodyInvalid = {
    invalidRequest: 'is a invalid request body'
}

it('should validate type default response with success.', async () => {
    pipe(
        requestBodyValid,
        RequestBodyCodec.decode,
        TE.fromEither,
        (decode) => validateType(decode),
        async (test) => expect(await test).toBe(requestBodyValid),
    )
})

it('should validate type default response invalid.', () => {
    pipe(
        requestBodyInvalid,
        RequestBodyCodec.decode,
        TE.fromEither,
        (decode) => validateType(decode),
        async test => expect(await test).toEqual([requestBodyMessage]),
    )
})
