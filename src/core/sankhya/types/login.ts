import * as t from 'io-ts'

// Login Typing
export const loginCodec = t.type({
  NOMUSU: t.type({
    $: t.string,
  }),
  INTERNO: t.type({
    $: t.string,
  }),
})

export type Login = t.TypeOf<typeof loginCodec>

// Output Login Typing
export const ResponseBodyLoginCodec = t.type({
  callID: t.type({
    $: t.string,
  }),
  jsessionid: t.type({
    $: t.string,
  }),
  idusu: t.type({
    $: t.string,
  }),
})

export type ResponseBodyLogin = t.TypeOf<typeof ResponseBodyLoginCodec>
