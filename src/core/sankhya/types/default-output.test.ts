import { pipe } from 'fp-ts/lib/function'
import { DefaultOutputCodec, statusMessage, transactionIdMessage, } from './default-output'
import { validateType } from '@/config/testes/fixtures/validateType'
import * as TE from 'fp-ts/TaskEither'


export const defaultResponse = {
  serviceName: 'MobileLoginSP.login',
  status: '1',
  pendingPrinting: 'false',
  transactionId: 'AD438531C277428EFE65C32CAF351F17',
}

export const invalidDefaultResponse = {
  serviceName: 'MobileLoginSP.login',
  pendingPrinting: 'false',
}

it('should validate type default response with success.', async () => {
  pipe(
    defaultResponse,
    DefaultOutputCodec.decode,
    TE.fromEither,
    (decode) => validateType(decode),
    async (test) => expect(await test).toBe(defaultResponse),
  )
})

it('should validate type default response invalid.', () => {
  pipe(
    invalidDefaultResponse,
    DefaultOutputCodec.decode,
    TE.fromEither,
    (decode) => validateType(decode),
    async test => expect(await test).toEqual([statusMessage, transactionIdMessage]),
  )
})
