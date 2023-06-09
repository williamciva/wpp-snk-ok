import { sendTextMessage } from "@/adapters/ports/whatsapp";

export default async (autorization: any) => {
    const phoneNumber = autorization["Usuario.AD_WPPLIB"]

    console.log("Sending Message to ", phoneNumber)

}