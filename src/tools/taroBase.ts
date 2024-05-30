import { isEmpty } from 'lodash-es';
let Taro = {} as any;

export function getEnv() {
  try {
    const Taro = getTaro();
    return !isEmpty(Taro);
  } catch (err) {
    return false;
  }
}

export function getTaro() {
  return Taro;
}

export function setTaro(libary: Object) {
  Taro = libary;
}
