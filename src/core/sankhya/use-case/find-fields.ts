import { postRequestBody } from "@/adapters/ports/sankhya/post";
import { LoadRecords, OutLoadRecords } from "../types/load-records"
import { RequestBody } from "../types/request-body"
import { objectConstructor } from "../utils/load-records";
import { Field } from "../types/fields";

const fieldsSearch = [
    "FIELD",
    "NUFIELD"
]

const record: LoadRecords = {
    entityName: "AD_WPPFIELD",
    standAlone: true,
    fields: fieldsSearch,
    tryJoinedFields: true,
    parallelLoader: true
}

const body: RequestBody = {
    requestBody: record
}

const path = '/mge/service.sbr';
const service = 'DatasetSP.loadRecords';

export const findFields = (): string[] => {
    var fields: string[] = []

    postRequestBody(body, path, service).then(
        (response) => {
            try {
                const responseBody: OutLoadRecords = response.responseBody as OutLoadRecords
                const obj = objectConstructor(fieldsSearch, responseBody.result)

                obj.forEach((e) => {
                    const fieldL = e as Field
                    fields.push(fieldL.field)
                })

                return fields
            } catch (error) {
                console.log("Inválid Request - ", `StatusMessage: ${JSON.stringify((response as any).statusMessage, null, 2)}`)
                console.log(error)
            }
        }
    )

    fields.push("Usuario.AD_WPPLIB")

    return fields;
}