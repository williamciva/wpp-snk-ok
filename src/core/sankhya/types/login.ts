export type Login = {
    NOMUSU: {
        $: string
    },
    INTERNO: {
        $: string
    }
}

export type OutputLogin = {
    callID: {
        $: string
    },
    jsessionid: {
        $: string
    },
    idusu: {
        $: string
    }
}

export type OutputErroLogin = {
    serviceName: string,
    status: number,
    pendingPrinting: boolean,
    transactionId: string,
    tsError: {
        tsErrorCode: string,
        tsErrorLevel: string
    },
    statusMessage: string
}