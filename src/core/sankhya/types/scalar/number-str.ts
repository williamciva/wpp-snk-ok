import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

type NumberStrBrand = {
    readonly NumberStr: unique symbol
}

export const NumberStrCodec = withMessage(
    t.brand(
        t.string,
        (value): value is t.Branded<string, NumberStrBrand> => isNumberStr(value),
        'NumberStr',
    ),
    () => 'Invalid Number.',
)

export type NumberStr = t.TypeOf<typeof NumberStrCodec>

const isNumberStr = (input: string): boolean =>
    /^\d+$/.test(input)