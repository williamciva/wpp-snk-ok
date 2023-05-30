import { env } from "@/helpers";
import { pipe } from "fp-ts/lib/pipeable";
import { RequestBodyCodec, ResponseBodyLoginCodec } from "../types";
import { postRequestBody } from "@/adapters/ports/sankhya/post";
import * as E from 'fp-ts/Either'
import { getErrorMessage } from "@/helpers/get-error-message";
import { setJSessionId } from "./sankhya";

const reqBodyLogin = {
  requestBody: {
    NOMUSU: {
      $: env('NOMUSU'),
    },
    INTERNO: {
      $: env('PASSWORD'),
    },
  }
}

const PATH = '/mge/service.sbr'
const SERVICE = 'MobileLoginSP.login'


pipe(
  reqBodyLogin,
  RequestBodyCodec.decode,
  E.fold(
    (errors) => { throw new Error(getErrorMessage(errors, ':::')) },
    (valueEncoded) => postRequestBody(valueEncoded, PATH, SERVICE).then(
      (response) => {
        return pipe(
          ResponseBodyLoginCodec.decode(response),
          E.fold(
            (errors) => { throw new Error(getErrorMessage(errors, ':::')) },
            (loginResponse) => {
              setJSessionId(loginResponse.jsessionid.$)
              console.log(loginResponse)
            }
          )
        )
      },
    )
  )

)