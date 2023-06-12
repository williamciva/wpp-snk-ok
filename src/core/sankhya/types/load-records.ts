export type LoadRecords = {
    dataSetID?: string,
    entityName: string,
    standAlone?: boolean,
    fields: string[],
    tryJoinedFields?: boolean,
    parallelLoader?: boolean,
    crudListener?: string,
    criteria?: {
        expression: string,
        parameters: {
            type: string
            value: number | string | boolean
        }[]
    },
    ignoreListenerMethods?: string,
    useDefaultRowsLimit?: boolean,
    clientEventList?: {
        clientrEvent: { $: string }[]
    },
    pagerID?: string
}

export type OutLoadRecords = {
    total: string,
    result: string[][],
    pagerID: string
}