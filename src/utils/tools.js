/**
 * 是否只null和undefined值
 * @param vl
 * @returns
 */
export function isNullOrUndefined (vl)  {
    return vl === null || typeof vl === "undefined";
}

/**
 * 获取对象下的字段值
 * @param record
 * @param key 'a.b.c'
 * @param defaultValue
 * @returns
 */
export const getValueByKeys = (record, key, defaultValue) => {
    if(record == null || typeof record !== 'object' || Array.isArray(record) || key == null){
        return defaultValue;
    }
    const keys = key.split(".");
    for (let i = 0; i < keys.length; i++) {
        record = record[keys[i]] || (i === keys.length - 1 ? defaultValue : {});
    }
    return record || defaultValue;
};
