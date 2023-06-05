import { OutLoadRecords } from "./load-records"
import { OutLogin } from "./login"

export type ResponseBody = {
    serviceName: string,
    status: string,
    pendingPrinting: string,
    transactionId: string,
    responseBody: OutLogin | OutLoadRecords
}