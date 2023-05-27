import * as t from 'io-ts'

// Default Output Success
export const DefaultOutputCodec =
    t.type(
      {
        serviceName: t.string,
        status: t.string,
        pendingPrinting: t.string,
        transactionId: t.string,
      },
    )

export type DefaultOutputSuccess = t.TypeOf<typeof DefaultOutputCodec>
