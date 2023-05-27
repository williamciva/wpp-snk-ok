import {
    InputBody,
    InputBodyType,
    OutputError,
    OutputErrorType,
    OutputSuccess,
    OutputSuccessType
} from "@/core"

export type BodyAdapterType = InputBodyType

export const input: BodyAdapterType = (RequestBodyCodec) => {
    return InputBody(RequestBodyCodec)
}



export type OutputErrorAdapterType = OutputErrorType

export const outputError: OutputErrorAdapterType = (OutputErroBody) => {
    return OutputError(OutputErroBody)
}



export type OutputSuccessAdapterType = OutputSuccessType

export const outputSuccess: OutputSuccessAdapterType = (OutputSuccessBody) => {
    return OutputSuccess(OutputSuccessBody)
}



export type OutInType = BodyAdapterType | OutputErrorAdapterType | OutputSuccessAdapterType