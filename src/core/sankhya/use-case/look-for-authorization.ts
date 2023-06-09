import { postRequestBody } from "@/adapters/ports/sankhya/post";
import { env, timer } from "@/helpers";
import { RequestBody } from "../types/request-body";
import { LoadRecords, OutLoadRecords } from "../types/load-records";
import { objectConstructor } from "../utils/load-records";
import { Alcada } from "../types/alcada";
import sendAuthorization from "./send-authorization";


const timeOut: number = getTimeOutEnv();

const fieldsSearch = [
    "NUCHAVE",
    "EVENTO",
    "ViewEventoLiberacao.DESCRICAO",
    "CODUSUSOLICIT",
    "Solicitante.NOMEUSU",
    "CODUSULIB",
    "Usuario.NOMEUSU",
    "Usuario.AD_WPPLIB",
    "VLRATUAL",
    "DHSOLICIT",
    "OBSERVACAO",
    "OBSLIB",
    "CODPARC",
    "Parceiro.NOMEPARC",
    "CODEMP",
    "Empresa.NOMEFANTASIA",
    "CODVEND",
    "Vendedor.APELIDO",
    "DTNEG",
    "CODTIPOPER",
    "TipoOperacao.DESCROPER",
    "VLRNOTA",
    "TOTALDESCONTONOTA"
]

const record: LoadRecords = {
    entityName: "ViewLiberacaoLimite",
    fields: fieldsSearch,
    tryJoinedFields: true,
    parallelLoader: true,
    crudListener: "br.com.sankhya.modelcore.crudlisteners.LiberacaoLimitesCrudListener",
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
        console.log("Looking for new records");

        postRequestBody(body, path, service).then(
            (response) => {
                try {
                    const responseBody: OutLoadRecords = response.responseBody as OutLoadRecords
                    const obj = objectConstructor(fieldsSearch, responseBody.result)

                    console.log(responseBody.total, " records were found.")

                    obj.forEach((e)=>{
                        const alcada = e as Alcada
                        sendAuthorization(alcada)
                    })
                } catch (error) {
                    console.log("Inválid Request - ", `StatusMessage: ${JSON.stringify((response as any).statusMessage, null, 2)}`)
                    console.log(error)
                }
            }
        )

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