import { sendTextMessage } from "@/adapters/ports/whatsapp";
import { Alcada } from "../types/alcada";

export default async (alcada: Alcada) => {
    const phoneNumber = alcada["Usuario.AD_WPPLIB"]

    console.log("Sending Message to ", phoneNumber)

    sendTextMessage(phoneNumber, `Olá *${alcada["Usuario.NOMEUSU"]}*, existe uma nova alçada de liberação para você.
Numero Único: ${alcada.NUCHAVE}
Tipo de Negociação: ${alcada.CODTIPOPER} - ${alcada["TipoOperacao.DESCROPER"]}
Parceiro: ${alcada.CODPARC} - ${alcada["Parceiro.NOMEPARC"]}
Vlr. da Nota: ${alcada.VLRNOTA}
Vlr. dos descontos: ${alcada.TOTALDESCONTONOTA}
Evento Solicitado: ${alcada.EVENTO}
Observações: ${alcada.OBSERVACAO}
    `)
}