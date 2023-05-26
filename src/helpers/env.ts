import * as t from 'io-ts'
import * as E from 'fp-ts/Either'
import { withMessage } from 'io-ts-types'
import { pipe } from 'fp-ts/lib/function'

export const env = (value: string): string =>
  pipe(
    process.env[value],
    envCodec.decode,
    E.fold(
      (error) => { throw error },
      (value) => value,

    ),
  )

type EnvBrand = {
  readonly Env: unique symbol
}


export const envCodec = withMessage(t.brand(
  t.string,
  (value): value is t.Branded<string, EnvBrand> => isEnv(value),
  'Env',
),
(value) => `You must set env var ${value}.`)


export type Env = t.TypeOf<typeof envCodec>

const isEnv = (value: string): boolean => typeof value === 'string' && value !== ''
