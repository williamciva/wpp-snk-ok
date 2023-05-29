import { pipe } from 'fp-ts/lib/function'
import { validateType } from '@/config/testes/fixtures/validateType'
import * as TE from 'fp-ts/TaskEither'
import { LoginCodec, invalidLoginMessage } from './login'


export const login = {
  NOMUSU: {
    $: "USERNAME"
  },
  INTERNO: {
    $: "@p@ssW0rd"
  }
}

export const invalidLogin = {
  NOMUSU: "USERNAME",
  INTERNO: {
    $: "@p@ssW0rd"
  }
}

export const responseBodyLogin = {
  callID: {
    $: "74A5FF86EC6D98046DDAC58542682817"
  },
  jsessionid: {
    $: "UhRC7mNZqUoPymrnFGHMmJJWeI0sIs1Mx4ERY5inu"
  },
  idusu: {
    $: "MjU5lK"
  }
}

it('should validate type default response with success.', async () => {
  pipe(
    login,
    LoginCodec.decode,
    TE.fromEither,
    (decode) => validateType(decode),
    async (test) => expect(await test).toBe(login),
  )
})

it('should validate type default response invalid.', () => {
  pipe(
    invalidLogin,
    LoginCodec.decode,
    TE.fromEither,
    (decode) => validateType(decode),
    async test => expect(await test).toEqual([invalidLoginMessage]),
  )
})