import { post } from "@/ports/sankhya";
import { Login } from "../types/login";
import { Body } from "../types/body";
import { env } from "@/helpers";
import { OutputBody } from "../types/outputBody";
import { OutputErrorBody } from "../types/outputErrorBody";

export var JSESSIONID: string = '';

const rb: Login = {
    NOMUSU: {
        $: env("NOMUSU")
    },
    INTERNO: {
        $: env("PASSWORD")
    }
}


const data: Body = {
    requestBody: rb
}

type Output = OutputBody | OutputErrorBody
var output: Output;

const login = async () => {
    console.log(data)
    output = await post(data, '/mge/service.sbr', 'MobileLoginSP.login') as OutputBody
    if (output.status === 1) {
        output as OutputBody
        JSESSIONID = typeof output.requestBody?.jsessionid === 'string' ? output.requestBody.jsessionid : ''
    } else {
        return output as OutputErrorBody
    }

}

login();
(async () => console.log( await JSESSIONID))()