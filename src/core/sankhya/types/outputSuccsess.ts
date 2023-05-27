import { OutputSuccessLoginCodec } from "./login"
import * as t from 'io-ts'



// Output Body on Success Typing 
export const ResponseBodyCodec =
    t.intersection(
        [
            OutputSuccessLoginCodec,
            t.unknown
        ]
    )

export type ResponseBody = t.TypeOf<typeof ResponseBodyCodec>


// Output Body on Success Function Typing
export type ResponseBodySuccess = <T extends ResponseBody & t.Mixed>(ResponseBody: T) => t.TypeC<{ responseBody: T }>

export const responseBodySuccess: ResponseBodySuccess = (ResponseBody) =>
    t.type({
        responseBody: ResponseBody
    })




export const DefaultOutputSuccessCodec = t.type({
    serviceName: t.string,
    status: t.number,
    pendingPrinting: t.boolean,
    transactionId: t.string,
})

export type DefaultOutputSuccess = t.TypeOf<typeof DefaultOutputSuccessCodec>


export const OutputSuccessBodyCodec = t.intersection(
    [
        DefaultOutputSuccessCodec,
        responseBodySuccess
    ]
)

export type OutputSuccessBody = t.TypeOf<typeof OutputSuccessBodyCodec>
