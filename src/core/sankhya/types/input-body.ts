import { loginCodec } from './login'
import * as t from 'io-ts'

// RequestBody Typing
export const RequestBodyLogicCodec =
  t.intersection(
    [
      loginCodec,
      t.unknown,
    ],
  )

export type RequestBodyLogic = t.TypeOf<typeof RequestBodyLogicCodec>

// Request body
export const RequestBodyCodec = t.type({
  requestBody: RequestBodyLogicCodec,
})

export type RequestBody = t.TypeOf<typeof RequestBodyCodec>
