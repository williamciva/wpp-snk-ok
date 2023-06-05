import { env, timer } from "@/helpers";
import { pipe } from "fp-ts/lib/function";


const timeOut: number = getTimeOutEnv();




(() => {
    while (true) {

        // pipe(
            
        // )

        timer(timeOut);
    }
})()



function getTimeOutEnv(): number {
    const number = Number(env('TIMEOUT'))
    if (isNaN(number)) {
        throw new Error('Invalid number to env var "TIMEOUT"')
    }
    return number
}