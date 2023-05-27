import { pipe } from 'fp-ts/lib/function'
import { DefaultOutputCodec } from './default-response'
import { validateTypeBrand } from '@/config/testes/fixtures/validateTypeBrand'
import * as E from 'fp-ts/Either'

const defaultResponse = {
  serviceName: 'MobileLoginSP.login',
  status: '1',
  pendingPrinting: 'false',
  transactionId: 'AD438531C277428EFE65C32CAF351F17',
}

const invalidDefaultResponse = {
  serviceName: 'MobileLoginSP.login',
  status: 1,
  pendingPrinting: false,
  transactionId: 'AD438531C277428EFE65C32CAF351F17',
}

it('should test type default response with success.', () => {
  pipe(
    defaultResponse,
    DefaultOutputCodec.decode,
    (decode) => expect(validateTypeBrand(decode, defaultResponse)),
  )
})

it('should test type default response invalid.', () => {
  pipe(
    invalidDefaultResponse,
    DefaultOutputCodec.decode,
    E.fold(
      () => false,
      () => true,
    ),
    (value) => expect(value).toBe(false),
  )
})
