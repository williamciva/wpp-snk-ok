import { OutputErroLogin } from "./login"

type OutputErrorBodyType =
    undefined |
    OutputErroLogin
    

export type OutputErrorBody = {
    serviceName: string,
    requestBody: OutputErrorBodyType
}