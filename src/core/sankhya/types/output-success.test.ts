import { pipe } from 'fp-ts/lib/function'
import { validateType } from '@/config/testes/fixtures/validateType'
import * as TE from 'fp-ts/TaskEither'
import { OutputSuccessBodyCodec, ResponseBodyLopgicCodec, invalidResponseBodyMessage } from './output-succsess'

const outputErrorValid = {
    serviceName: "MobileLoginSP.login",
    status: "1",
    pendingPrinting: "false",
    transactionId: "544A05A74D4A38D634ECE5378B39AD03",
    responseBody: {
        callID: {
            $: "F2DA2390E2A9986D8EF6432E3718B06A"
        },
        jsessionid: {
            $: "UhRC7mNZqUoPymrnqbkmJJWeI0sIs1Mx4N8A5inu"
        },
        idusu: {
            $: "MjU5KL"
        }
    }
}

const outputErrorInvalid = {
    serviceName: "MobileLoginSP.login",
    status: "1",
    pendingPrinting: "false",
    transactionId: "544A05A74D4A38D634ECE5378B39AD03",
    responseBody: {
        callID: {
            $: "F2DA2390E2A9986D8EF6432E3718B06A"
        },
    }
}

it('should validate type default response with success.', async () => {
    pipe(
        outputErrorValid,
        OutputSuccessBodyCodec.decode,
        TE.fromEither,
        (decode) => validateType(decode),
        async (test) => expect(await test).toBe(outputErrorValid),
    )
})

it('should validate type default response invalid.', () => {
    pipe(
        outputErrorInvalid,
        ResponseBodyLopgicCodec.decode,
        TE.fromEither,
        (decode) => validateType(decode),
        async test => expect(await test).toEqual([invalidResponseBodyMessage]),
    )
})
