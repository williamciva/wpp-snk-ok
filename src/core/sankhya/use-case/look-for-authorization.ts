import { env, timer } from "@/helpers";


const timeOut: number = getTimeOutEnv()


while (true){
    
    

    timer(timeOut);
}


function getTimeOutEnv(): number {
    const number = Number(env('TIMEOUT'))
    if (isNaN(number)) {
        throw new Error('Invalid number to env var "TIMEOUT"')
    }
    return number
}