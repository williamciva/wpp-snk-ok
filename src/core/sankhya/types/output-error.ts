import * as t from 'io-ts'
import { DefaultOutputCodec } from './default-output'
import { withMessage } from 'io-ts-types'

export const ErrorCodec =

  t.type({
    tsError: withMessage(
      t.type({
        tsErrorCode: t.string,
        tsErrorLevel: t.string,
      }),
      () => tsErrorMessage
    ),
    statusMessage: withMessage(
      t.string,
      () => statusMessagerMessage
    ),
  })

export type Error = t.TypeOf<typeof ErrorCodec>

export const OutputErrorBodyCodec = t.intersection(
  [
    DefaultOutputCodec,
    ErrorCodec,
  ],
)

export const tsErrorMessage = 'Invalid tsError.'
export const statusMessagerMessage = 'Invalid statusMessage.'