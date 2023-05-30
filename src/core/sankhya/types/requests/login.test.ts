import { pipe } from 'fp-ts/lib/function'
import { validateType } from '@/config/testes/fixtures/validateType'
import * as TE from 'fp-ts/TaskEither'
import { LoginCodec, ResponseBodyLoginCodec, invalidLoginMessage, invalidResponseBodyLoginMessage } from './login'


const login = {
  NOMUSU: {
    $: "USERNAME"
  },
  INTERNO: {
    $: "@p@ssW0rd"
  }
}

const invalidLogin = {
  NOMUSU: "USERNAME",
  INTERNO: {
    $: "@p@ssW0rd"
  }
}

const responseBodyLogin = {
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

const invalidResponseBodyLogin = {
  callID: {
    $: "74A5FF86EC6D98046DDAC58542682817"
  },
  idusu: {
    $: 1
  }
}

it('should validate login with success.', async () => {
  pipe(
    login,
    LoginCodec.decode,
    TE.fromEither,
    (decode) => validateType(decode),
    async (test) => expect(await test).toBe(login),
  )
})

it('should validate invalid login.', async () => {
  pipe(
    invalidLogin,
    LoginCodec.decode,
    TE.fromEither,
    (decode) => validateType(decode),
    async test => expect(await test).toEqual([invalidLoginMessage]),
  )
})

it('should validate response body login with success.', async () => {
  pipe(
    responseBodyLogin,
    ResponseBodyLoginCodec.decode,
    TE.fromEither,
    (decode) => validateType(decode),
    async (test) => expect(await test).toBe(responseBodyLogin),
  )
})

it('should validate invalid response body login.', async () => {
  pipe(
    invalidResponseBodyLogin,
    ResponseBodyLoginCodec.decode,
    TE.fromEither,
    (decode) => validateType(decode),
    async test => expect(await test).toEqual([invalidResponseBodyLoginMessage]),
  )
})