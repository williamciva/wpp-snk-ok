import {
    Client,
    LocalAuth,
    MessageContent,
    MessageSendOptions
} from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal';

var ready = false;

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-key" })
});

client.on('qr', (qr) => {
    console.log("ENTREI AQ")
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    ready = true;
});

client.initialize();


export const sendMessage = async (phoneNumber: string, content: MessageContent, options?: MessageSendOptions | undefined) => {
    if (ready) {
        client.sendMessage(`${phoneNumber}@c.us`, content, options)
    } else {
        console.log("Client not ready.")
    }
}

export const isReady = () => ready