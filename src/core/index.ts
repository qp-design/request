import fly from './basic';
import * as qs from 'qs';
import { formDataTrans, getParams } from '@/utils';
import { host } from '@/config';

export const postWithJson = (url: string, params = {}) => mockImpl(url, () => fly.post(url, getParams(params)), params);

export const get = (url: string, params = {}) => mockImpl(url, () => fly.get(url, getParams(params)), params);

export const postFormData = (url: string, params = {}) =>
  mockImpl(
    url,
    () => {
      const formData = formDataTrans(getParams(params));
      return fly.post(url, formData);
    },
    params
  );

export const post = (url: string, params = {}) => mockImpl(url, () => fly.post(url, qs.stringify(getParams(params))), params);

const mockImpl = (url: string, callback: () => Promise<any>, params?: {}) => {
  const { isLocalMock = '' } = params as any;

  if (!isLocalMock) {
    return callback();
  }

  const path = url.match(/(\w+)\.json/g);

  if (!path) {
    return callback();
  }

  return fly.get(`${host}/mock/${path}`);
};
