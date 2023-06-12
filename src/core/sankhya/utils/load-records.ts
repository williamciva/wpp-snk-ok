export const loadRecordConstructor = (fields: string[], responses: string[][]) => {
    const l_array: { [key: string]: string | undefined }[] = [];
    for (const array of responses) {
        const obj: { [key: string]: string | undefined } = {};
        fields.forEach((key, idx) => obj[key] = array[idx]);
        l_array.push(obj);
    }
    return l_array;
};