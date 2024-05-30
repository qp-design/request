//@ts-nocheck
import flyIo from './basic';
import * as qs from 'qs';
import EngineWrapper from 'flyio/dist/npm/engine-wrapper';
import adapter from 'flyio/src/adapter/wx';
import { formDataTrans, getParams } from '../tools';
import { host } from '@/config';
export const postWithJson = (url: string, params = {}) => mockImpl(url, () => flyIo.post(url, getParams(params)), params);

export const get = (url: string, params = {}) => mockImpl(url, () => flyIo.get(url, getParams(params)), params);

export const postFormData = (url: string, params = {}) =>
  mockImpl(
    url,
    () => {
      const formData = formDataTrans(getParams(params));
      return flyIo.post(url, formData);
    },
    params
  );

export const post = (url: string, params = {}) => mockImpl(url, () => flyIo.post(url, qs.stringify(getParams(params))), params);

const mockImpl = (url: string, callback: () => Promise<any>, params?: {}) => {
  const { isLocalMock = '' } = params as any;

  if (!isLocalMock) {
    return callback();
  }

  const path = url.match(/(\w+)\.json/g);

  if (!path) {
    return callback();
  }

  return flyIo.get(`${host}/mock/${path}`);
};

export const fly = flyIo;

export function wxEngine() {
  flyIo.engine = EngineWrapper(adapter);
}
