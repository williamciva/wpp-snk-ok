import { loginCodec } from "./login"
import * as t from 'io-ts'



// RequestBody Typing 
export const RequestBodyCodec =
    t.intersection(
        [
            loginCodec,
            t.unknown
        ]
    )


export type RequestBody = t.TypeOf<typeof RequestBodyCodec>



// RequestBody Function Typing
export type InputBodyType = <T extends RequestBody & t.Mixed>(RequestBodyCodec: T) => t.TypeC<{ requestBody: T }>

export const InputBody: InputBodyType = (RequestBodyCodec) => {
    return t.type({
        requestBody: RequestBodyCodec
    })
}