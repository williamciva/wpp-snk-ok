import { pipe } from 'fp-ts/lib/function'
import { validateType } from '@/config/testes/fixtures/validateType'
import * as TE from 'fp-ts/TaskEither'
import { OutputErrorBodyCodec, statusMessagerMessage } from './output-error'


const outputErrorValid = {
    serviceName: 'MobileLoginSP.login',
    status: '1',
    pendingPrinting: 'false',
    transactionId: 'AD438531C277428EFE65C32CAF351F17',
    tsError: {
        tsErrorCode: 'CORE_E01428',
        tsErrorLevel: 'ERROR',
    },
    statusMessage: 'Usuário/Senha inválido.',
}

const outputErrorInvalid = {
    serviceName: 'MobileLoginSP.login',
    status: '1',
    pendingPrinting: 'false',
    transactionId: 'AD438531C277428EFE65C32CAF351F17',
    tsError: {
        tsErrorCode: 'CORE_E01428',
        tsErrorLevel: 'ERROR',
    },
}

it('should validate type default response with success.', async () => {
    pipe(
        outputErrorValid,
        OutputErrorBodyCodec.decode,
        TE.fromEither,
        (decode) => validateType(decode),
        async (test) => expect(await test).toBe(outputErrorValid),
    )
})

it('should validate type default response invalid.', async () => {
    pipe(
        outputErrorInvalid,
        OutputErrorBodyCodec.decode,
        TE.fromEither,
        (decode) => validateType(decode),
        async test => expect(await test).toEqual([statusMessagerMessage]),
    )
})
