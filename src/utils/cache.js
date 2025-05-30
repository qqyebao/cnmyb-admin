import {isNullOrUndefined} from '@/utils/tools.js'

/**
 * 存储介质适配器
 * @param isSessionStorage
 * @returns
 */
const cacheAdapter = (isSessionStorage) => {
    return isSessionStorage ? sessionStorage : localStorage;
};

/**
 * 设置缓存值
 * @param {*} key
 * @param {*} value
 * @param {*} isSessionStorage
 */
export const setCache = (key, isSessionStorage, value) => {
    cacheAdapter(isSessionStorage).setItem(
        key,
        typeof value === "object" ? JSON.stringify(value) : value
    );
};


/**
 * 取缓存值
 * @param {*} key
 * @param {*} isSessionStorage
 * @param {*} defaultValue
 */
export const getCache = (key, isSessionStorage, defaultValue) => {
    const options = { isParse: true, isDelete: false };
    try {
        const value = cacheAdapter(isSessionStorage).getItem(key) || defaultValue;
        if (options.isDelete) {
            cacheAdapter(options.isSessionStorage).removeItem(key);
        }
        return isNullOrUndefined(value)
            ? defaultValue
            : value;
    } catch (error) {
        console.error("getCache", error);
        return defaultValue;
    }
};
