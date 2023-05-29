import * as TE from 'fp-ts/TaskEither'
import * as T from 'fp-ts/Task'
import { pipe } from 'fp-ts/function'
import * as t from 'io-ts'
import { failure } from 'io-ts/PathReporter'

export const validateType = (decodedTest: TE.TaskEither<t.Errors, unknown>) => {
  return (pipe(
    decodedTest,
    TE.fold(
      (errors) => T.task.of(failure(errors)),
      (sucess) => T.task.of(sucess)
    )
  ))()
}
