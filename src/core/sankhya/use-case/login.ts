import { post } from '@/ports/sankhya'
import { Login } from '../types/login'
import { env } from '@/helpers'

const rb = {
  NOMUSU: {
    $: env('NOMUSU'),
  },
  INTERNO: {
    $: env('PASSWORD'),
  },
}

const data: Body = {
  requestBody: rb,
}

type Output = OutputBody | OutputErrorBody
let output: Output

const login = async () => {
  output = await post(data, '/mge/service.sbr', 'MobileLoginSP.login') as OutputBody
  if (output.status === 1) {
        output as OutputBody
        JSESSIONID = typeof output.requestBody?.jsessionid === 'string' ? output.requestBody.jsessionid : ''
  } else {
    return output as OutputErrorBody
  }
}

login();
(async () => console.log(await JSESSIONID))()
