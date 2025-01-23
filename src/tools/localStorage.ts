import { getTaro } from './taroBase';
/**
 * 获取
 */
export const getSessionStorageWeb = (key: string) => {
  const val: string = window.sessionStorage.getItem(key) || '';
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};

export const getSessionStorage = (key: string) => {
  try {
    if (sessionStorage) {
      return getSessionStorageWeb(key);
    }
    const Taro = getTaro();
    return Taro.getStorageSync(key);
  } catch (err) {
    return '';
  }
};

/**
 * 获取
 */
export const getStorageWeb = (key: string) => {
  const val: string = window.localStorage.getItem(key) || '';
  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};

export const getStorage = (key: string) => {
  try {
    if (localStorage) {
      return getStorageWeb(key);
    }
    const Taro = getTaro();
    return Taro.getStorageSync(key);
  } catch (err) {
    return '';
  }
};

export const setStorageWeb = (key: string, obj: string | { [v: string]: unknown }) => {
  if (typeof obj === 'string') {
    window.localStorage.setItem(key, obj);
  } else {
    window.localStorage.setItem(key, JSON.stringify(obj));
  }
};

export const setStorage = (key: string, obj: any) => {
  if (localStorage) {
    setStorageWeb(key, obj);
  } else {
    const Taro = getTaro();
    Taro.setStorageSync(key, obj);
  }
};

export const removeStorage = (key: string) => {
  if (localStorage) {
    window.localStorage.removeItem(key);
    window.sessionStorage.removeItem(key);
  } else {
    const Taro = getTaro();
    Taro.removeStorageSync(key);
  }
};
