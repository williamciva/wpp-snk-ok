import { withMessage } from 'io-ts-types'
import { DefaultOutputCodec } from './default-output'
import { ResponseBodyLoginCodec } from './requests/login'
import * as t from 'io-ts'

// Response body on Success
export const ResponseBodyLopgicCodec =
  withMessage(
    t.union(
      [
        ResponseBodyLoginCodec,
        t.null,
      ],
    ),
    () => invalidResponseBodyMessage
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

export const invalidResponseBodyMessage = 'Invalid Response Body'