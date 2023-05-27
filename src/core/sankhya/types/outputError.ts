import { OutputErroLoginCodec } from "./login"
import * as t from 'io-ts'



// Output Body on Error Typing 
export const OutputErrorBodyCodec =
    t.intersection(
        [
            OutputErroLoginCodec,
            t.unknown
        ]
    )


export type OutputErroBody = t.TypeOf<typeof OutputErrorBodyCodec>



// Output Body on Error Function Typing
export type OutputErrorType = <T extends OutputErroBody & t.Mixed>(OutputErroBody: T) => t.TypeC<{ responseBody: T }>

export const OutputError: OutputErrorType = (OutputErroBody) => {
    return t.type({
        responseBody: OutputErroBody
    })
}