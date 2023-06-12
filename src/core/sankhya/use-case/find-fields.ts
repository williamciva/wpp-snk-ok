import { postRequestBody } from "@/adapters/ports/sankhya/post";
import { LoadRecords, OutLoadRecords } from "../types/load-records"
import { RequestBody } from "../types/request-body"


const path = '/mge/service.sbr';
const service = 'DatasetSP.loadRecords';

export const findFields = async (): Promise<string[]> => {
    var record: LoadRecords = {
        entityName: "AD_VWWPPCAMP",
        fields: ["CAMPO"],
        tryJoinedFields: true,
        parallelLoader: true,
        criteria: { expression: "this.EVENTO = ?", parameters: [{ type: 'N', value: 0 }] }
    }

    const body: RequestBody = {
        requestBody: record
    }

    var fields: string[] = []

    const responseBody: OutLoadRecords = (await postRequestBody(body, path, service)).responseBody as OutLoadRecords

    responseBody.result.forEach((e) => typeof e[0] === 'string' ? fields.push(e[0]) : '')

    record.pagerID = responseBody.pagerID;

    while (true) {
        try {
            const responseBody2: OutLoadRecords = (await postRequestBody(body, path, service)).responseBody as OutLoadRecords;

            responseBody2.result.forEach((e) => {
                if (typeof e[0] === 'string') {
                    fields.push(e[0])
                } else {
                    new Error();
                }
            })

        } catch (error) {
            break;
        }
    }


    fields.push("Usuario.AD_WPPLIB")
    return fields;
}