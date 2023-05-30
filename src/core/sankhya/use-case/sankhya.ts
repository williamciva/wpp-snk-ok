import { pipe, constTrue, constFalse } from 'fp-ts/function';
import * as E from 'fp-ts/Either'


var JSESSIONID: string = ' '

export const setJSessionId = (JSessionId: string): boolean => {
    return pipe(
        E.tryCatch(
            () => JSESSIONID = JSessionId,
            (error) => error
        ),
        E.fold(constFalse, constTrue)
    )
};

export const getJSessionId = () => typeof JSESSIONID === 'string' && JSESSIONID.length > 0 ? JSESSIONID : ' '