export type LoadRecords = {
    dataSetID: string | undefined,
    entityName: string,
    standAlone: boolean | undefined,
    fields: string[],
    tryJoinedFields: boolean | undefined,
    parallelLoader: boolean | undefined,
    crudListener: string | undefined,
    criteria: {
        expression: string,
        parameters: {
            type: string
            value: number | string | boolean
        }[]
    },
    ignoreListenerMethods: string,
    useDefaultRowsLimit: boolean | undefined,
    clientEventList: {
        clientrEvent: { $: string }[]
    } | undefined
}

export type OutLoadRecords = {
    total: string,
    result: [][]
}