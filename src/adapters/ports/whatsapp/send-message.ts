import { sendMessage as WASendMessage } from '@/ports/whatsapp-js'

export const sendTextMessage = (phoneNumber: string, text: string) => {
    return WASendMessage(phoneNumber, text, undefined)
}