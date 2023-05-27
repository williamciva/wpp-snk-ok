import { RequestBodyCodec } from '@/core'
import { pipe } from 'fp-ts/function'
import * as E from 'fp-ts/Either'

export const input = (RequestBody: unknown) => {
  return pipe(
    RequestBody,
    RequestBodyCodec.decode,
    console.log,
  )
}

// export type OutputErrorAdapterType = OutputErrorType

// export const outputError: OutputErrorAdapterType = (OutputErroBody) => {
//   return OutputError(OutputErroBody)
// }

// export type OutputSuccessAdapterType = OutputSuccessType

// export const outputSuccess: OutputSuccessAdapterType = (OutputSuccessBody) => {
//   return OutputSuccess(OutputSuccessBody)
// }

// export type OutInType = BodyAdapterType | OutputErrorAdapterType | OutputSuccessAdapterType
