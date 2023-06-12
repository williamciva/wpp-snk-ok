import { postRequestBody } from "@/adapters/ports/sankhya/post";
import { LoadRecords, OutLoadRecords } from "../types/load-records"
import { RequestBody } from "../types/request-body"
import { loadRecordConstructor } from "../utils/load-records";
import { Message } from "../types/message";

const path = '/mge/service.sbr';
const service = 'DatasetSP.loadRecords';

export const findMessage = async (evento: string): Promise<string> => {
const fields =  ["MSG"]

    const record: LoadRecords = {
        entityName: "AD_WPPCAB",
        fields: fields,
        criteria: {
            expression: `this.EVENTO = ${evento}`,
            parameters: [{
                type: 'N',
                value: 0
            }]
        },
        tryJoinedFields: true,
        parallelLoader: true
    }

    const body: RequestBody = {
        requestBody: record
    }

    var messsage: Message;

    const responseBody: OutLoadRecords = (await postRequestBody(body, path, service)).responseBody as  OutLoadRecords;
    messsage = (loadRecordConstructor(fields, responseBody.result)[0] as Message);

    return messsage.MSG
}