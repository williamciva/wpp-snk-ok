import { OutputLogin } from "./login"


type OutputBodyType =
    undefined |
    OutputLogin


export type OutputBody = {
    serviceName: string,
    status: number,
    pendingPrinting: boolean,
    transactionId: string,
    requestBody: OutputBodyType
}

