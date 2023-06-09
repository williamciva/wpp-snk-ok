import {
    Client,
    LocalAuth,
    MessageContent,
    MessageSendOptions
} from 'whatsapp-web.js'
import { generate } from 'qrcode-terminal';


const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-key" })
});

client.on('qr', (qr) => {
    generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();


export const sendMessage = async (phoneNumber: string, content: MessageContent, options?: MessageSendOptions | undefined) => {
    try {
        client.sendMessage(`${phoneNumber}@c.us`, content, options)
    } catch (error) {
        console.log('Not sending message.')
    }
}