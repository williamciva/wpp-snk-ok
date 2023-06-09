import { env } from "@/helpers";
import { postRequestBody } from "@/adapters/ports/sankhya/post";
import { setJSessionId } from "../utils/sankhya";
import { Login, OutLogin } from "../types/login";
import { RequestBody } from "../types/request-body";


const login: Login = {
  NOMUSU: {
    $: env('NOMUSU'),
  },
  INTERNO: {
    $: env('PASSWORD'),
  },
}

const body: RequestBody = {
  requestBody: login
}

const path = '/mge/service.sbr'
const service = 'MobileLoginSP.login';


export default async () => await postRequestBody(body, path, service).then(
  (response) => {
    const responseBody: OutLogin = response.responseBody as OutLogin
    setJSessionId(responseBody.jsessionid.$)
    console.log("Login with success")
  }
)