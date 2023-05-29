import { withMessage } from 'io-ts-types'
import { LoginCodec } from './requests/login'
import * as t from 'io-ts'

// RequestBody Typing
export const RequestBodyLogicCodec =
  withMessage(
    t.union(
      [
        LoginCodec,
        t.null,
      ],
    ),
    () => requestBodyMessage
  )

export type RequestBodyLogic = t.TypeOf<typeof RequestBodyLogicCodec>

// Request body
export const RequestBodyCodec = t.type({
  requestBody: RequestBodyLogicCodec,
})

export type RequestBody = t.TypeOf<typeof RequestBodyCodec>

export const requestBodyMessage = 'Invalid Request Body.'