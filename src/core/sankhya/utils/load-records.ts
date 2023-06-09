export const objectConstructor = (fields: string[], responses: string[][]) => {
    const l_array: { [key: string]: string | undefined }[] = [];

    for (const array of responses) {
        const obj: { [key: string]: string | undefined } = {};
        fields.forEach((key, idx) => {

            // const keySplited = key.split(".")
            // const keyValue = keySplited[keySplited.length -1]
            
            // if (keyValue !== undefined) {
            //     obj[keyValue] = array[idx]
            // }
            obj[key] = array[idx]

        });

        l_array.push(obj);
    }

    return l_array;
};