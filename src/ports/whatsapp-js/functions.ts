export const sendMessage = async (phoneNumber: string, content: MessageContent, options?: MessageSendOptions | undefined) => {
    client.sendMessage(`${phoneNumber}@c.us`, content, options)
}