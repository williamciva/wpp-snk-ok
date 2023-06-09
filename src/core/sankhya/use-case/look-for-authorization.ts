import { postRequestBody } from "@/adapters/ports/sankhya/post";
import { env, timer } from "@/helpers";
import { RequestBody } from "../types/request-body";
import { LoadRecords, OutLoadRecords } from "../types/load-records";
import { objectConstructor } from "../utils/load-records";
import sendAuthorization from "./send-authorization";
import { isReady } from "@/adapters/ports/whatsapp/is-ready";
import { findFields } from "./find-fields";


const timeOut: number = getTimeOutEnv();

const fieldsSearch = findFields()

const record: LoadRecords = {
    entityName: "ViewLiberacaoLimite",
    fields: fieldsSearch,
    tryJoinedFields: true,
    parallelLoader: true,
    criteria: {
        expression: "this.DHLIB IS NULL AND this.VLRLIBERADO < this.VLRATUAL AND Usuario.AD_WPPLIB IS NOT NULL",
        parameters: [{
            type: "N",
            value: 0
        }]
    }
}

const body: RequestBody = {
    requestBody: record
}

const path = '/mge/service.sbr';
const service = 'DatasetSP.loadRecords';


export default async () => {
    while (true) {
        if (isReady()) {
            console.log("Looking for new records");

            postRequestBody(body, path, service).then(
                (response) => {
                    try {
                        const responseBody: OutLoadRecords = response.responseBody as OutLoadRecords
                        const obj = objectConstructor(fieldsSearch, responseBody.result)

                        console.log(responseBody.total, " records were found.")

                        obj.forEach((e) => {
                            sendAuthorization(e)
                        })
                    } catch (error) {
                        console.log("Inválid Request - ", `StatusMessage: ${JSON.stringify((response as any).statusMessage, null, 2)}`)
                        console.log(error)
                    }
                }
            )
        } else {
            console.log("Client whatsapp is being initialized.")
        }

        await timer(timeOut);
    }
}



function getTimeOutEnv(): number {
    const number = Number(env('TIMEOUT'))
    if (isNaN(number)) {
        throw new Error('Invalid number to env var "TIMEOUT"')
    }
    return number
}