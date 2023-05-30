import * as t from 'io-ts'
import { failure } from 'io-ts/lib/PathReporter'

export const getErrorMessage = (erros: t.Errors, joinChatactere: string | undefined): string=> {
    return failure(erros).join(joinChatactere)
}