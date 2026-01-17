export function pickFields(data, fields) {
    const result = {};
    for (const field of fields) {
        if (field in data) {
            result[field] = data[field];
        }
    }
    return result;
}