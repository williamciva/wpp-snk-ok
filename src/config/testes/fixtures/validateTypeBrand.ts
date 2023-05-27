import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'

export const validateTypeBrand = (decodedTest: E.Either<t.Errors, unknown>, expected: unknown) => {
  return pipe(
    decodedTest,
    E.fold(
      (fail) => expect(fail[0]?.message).toBe(expected),
      (sucess) => expect(sucess).toBe(expected),
    ),
  )
}
