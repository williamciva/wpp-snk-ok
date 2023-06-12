import { sendTextMessage } from "@/adapters/ports/whatsapp";
import { findMessage } from "./find-message";

export default async (autorization: any) => {
    const phoneNumber = autorization["Usuario.AD_WPPLIB"]

    console.log(autorization["ViewEventoLiberacao.EVENTO"])
    const message = await findMessage(autorization["ViewEventoLiberacao.EVENTO"])
    console.log("Mensagem é:", message);

    sendTextMessage(phoneNumber, message).then((response)=>console.log(response)).catch((error)=>console.log(error));
    console.log("Sending Message to ", phoneNumber)
}   