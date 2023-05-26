import * as WA from '@open-wa/wa-automate'
import { onMenssage as coreOnMenssage } from '@/core/client-wa/use-case/onMessage'
import path from 'path';

const config: WA.ConfigObject = {
    hostNotificationLang: WA.NotificationLanguage.PTBR,
    multiDevice: true,
    sessionDataPath: path.resolve('session')
}

const clientWA: Promise<WA.Client> = WA.create(config);


(async () => {
    (await clientWA).onMessage((message: WA.Message) => coreOnMenssage(message))
})()


// type SendMessage = (to: WA.ChatId, content: WA.Content) => Promise<boolean | WA.MessageId>

// const sendMessage: SendMessage = async (to, content) => await (await clientWA).sendText(to, content)
