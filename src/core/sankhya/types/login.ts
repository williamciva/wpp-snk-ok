import * as t from 'io-ts'



// Login Typing
export const loginCodec = t.type({
    NOMUSU: t.type({
        $: t.string
    }),
    INTERNO: t.type({
        $: t.string
    })
})

export type Login = t.TypeOf<typeof loginCodec>



// Output Login Typing
export const OutputSuccessLoginCodec = t.type({
    callID: t.type({
        $: t.string
    }),
    jsessionid: t.type({
        $: t.string
    }),
    idusu: t.type({
        $: t.string
    })
})

export type OutputSuccessLogin = t.TypeOf<typeof OutputSuccessLoginCodec>



// Output Login Typing
export const OutputErroLoginCodec = t.type({
    serviceName: t.string,
    status: t.number,
    pendingPrinting: t.boolean,
    transactionId: t.string,
    tsError: t.type({
        tsErrorCode: t.string,
        tsErrorLevel: t.string
    }),
    statusMessage: t.string
})

export type OutputErroLogin = t.TypeOf<typeof OutputErroLoginCodec>
