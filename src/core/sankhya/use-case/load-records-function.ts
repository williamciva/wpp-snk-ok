const loadRecords = (...fields: string[]) => {
    const response = [["abcd", "efgh", "ijkl"], ["abcd", "efgh", "ijkl"], ["abcd", "efgh", "ijkl"]]

    var l_obj = []

    for (let array of response) {
        for (let index in array) {
            const key = fields[index];
            if (typeof key === "string") {
                l_obj.push({
                    [key]: array[index]
                })
            }
        }
    }
    return l_obj;
}