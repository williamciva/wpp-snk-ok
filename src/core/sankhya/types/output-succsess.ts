import { DefaultOutputCodec } from './default-response'
import { ResponseBodyLoginCodec } from './login'
import * as t from 'io-ts'

// Response body on Success
export const ResponseBodyLopgicCodec =
  t.intersection(
    [
      ResponseBodyLoginCodec,
      t.unknown,
    ],
  )

export type ResponseBodyLogic = t.TypeOf<typeof ResponseBodyLopgicCodec>

// Response body
export const ResponseBodyCodec = t.type({
  responseBody: ResponseBodyLopgicCodec,
})

export type ResponseBody = t.TypeOf<typeof ResponseBodyCodec>

// Output on Success
export const OutputSuccessBodyCodec = t.intersection(
  [
    DefaultOutputCodec,
    ResponseBodyCodec,
  ],
)

export type OutputSuccessBody = t.TypeOf<typeof OutputSuccessBodyCodec>
