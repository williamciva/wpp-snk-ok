import * as WA from '@open-wa/wa-automate'
import { onMenssage as coreOnMenssage } from '@/core/client-wa/use-case/onMessage'

const config: WA.ConfigObject = {
    hostNotificationLang: WA.NotificationLanguage.PTBR,
}

WA.create(config).then((client) => start(client))


export const start = (client: WA.Client) => {
    client.onMessage((message: WA.Message) => coreOnMenssage(message))
}