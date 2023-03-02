import { getTaro } from './getTaro';

const getValue = async (key: string) => {
  if (localStorage) {
    return localStorage.getItem(key);
  }
  const Taro = await getTaro();
  return Taro.getStorageSync(key);
};

export const setStorage = async (key: string, value: any) => {
  if (localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value));
  } else {
    const Taro = await getTaro();
    Taro.setStorageSync(key, value);
  }
};

export const removeStorage = async (key: string) => {
  if (localStorage) {
    window.localStorage.removeItem(key);
  } else {
    const Taro = await getTaro();
    Taro.removeStorageSync(key);
  }
};

export const getStorage = async (key: string) => {
  const value = (await getValue(key)) || '""';
  const flag = value.includes('ticketTokenid');
  try {
    return flag ? JSON.parse(value).ticketTokenid : value;
  } catch (err) {
    return '';
  }
};
