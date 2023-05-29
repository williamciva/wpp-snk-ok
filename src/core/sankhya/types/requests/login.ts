import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

// Login Typing
export const LoginCodec =
  withMessage(
    t.type({
      NOMUSU: t.type({
        $: t.string,
      }),
      INTERNO: t.type({
        $: t.string,
      }),
    }),
    () => invalidLoginMessage
  )
  
export const invalidLoginMessage = 'Invalid login structure.'

export type Login = t.TypeOf<typeof LoginCodec>


// Output Login Typing
export const ResponseBodyLoginCodec =
  withMessage(
    t.type({
      callID: t.type({
        $: t.string,
      }),
      jsessionid: t.type({
        $: t.string,
      }),
      idusu: t.type({
        $: t.string,
      }),
    }),
    () => invalidResponseBodyLoginMessage
  )
export const invalidResponseBodyLoginMessage = 'Invalid Response Body structure for login.'

export type ResponseBodyLogin = t.TypeOf<typeof ResponseBodyLoginCodec>
