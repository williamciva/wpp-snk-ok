import * as t from 'io-ts'
import { DefaultOutputCodec } from './default-response'

export const ErrorCodec = t.type({
  tsError: t.type({
    tsErrorCode: t.string,
    tsErrorLevel: t.string,
  }),
  statusMessage: t.string,
})

export type Error = t.TypeOf<typeof ErrorCodec>

export const OutputErrorBodyCodec = t.intersection(
  [
    DefaultOutputCodec,
    ErrorCodec,
  ],
)
