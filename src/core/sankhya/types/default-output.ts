import { BooleanStrCodec } from './scalar'
import { NumberStrCodec } from './scalar'
import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

// Default Output Success
export const DefaultOutputCodec =
  t.type(
    {
      serviceName: withMessage(t.string, () => serviceNameMessage),
      status: withMessage(NumberStrCodec, () => statusMessage),
      pendingPrinting: withMessage(BooleanStrCodec, () => pendingPrintingMessage),
      transactionId: withMessage(t.string, () => transactionIdMessage),
    },
  )

export type DefaultOutputSuccess = t.TypeOf<typeof DefaultOutputCodec>

export const serviceNameMessage = 'Invalid serviceName.'
export const statusMessage = 'Invalid status.'
export const pendingPrintingMessage = 'Invalid pendingPrinting.'
export const transactionIdMessage = 'Invalid transactionId.'