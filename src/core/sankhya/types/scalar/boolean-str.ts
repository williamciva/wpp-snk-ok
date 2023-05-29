import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

type BooleanStrBrand = {
    readonly BooleanStr: unique symbol
}

export const BooleanStrCodec = withMessage(
    t.brand(
        t.string,
        (value): value is t.Branded<string, BooleanStrBrand> => isBooleanStr(value),
        'BooleanStr',
    ),
    () => invalidBoolenStr,
)

export type BooleanStr = t.TypeOf<typeof BooleanStrCodec>

const isBooleanStr = (input: string): boolean =>
    /^(true)|(false)$/i.test(input)

export const invalidBoolenStr = 'Invalid Boolean.'