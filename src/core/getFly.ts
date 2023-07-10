//@ts-nocheck
import { isWechat } from '@/utils';
import wx from 'flyio/dist/npm/wx';
import web from 'flyio/dist/npm/fly';

function getFlyEngine() {
  return isWechat ? wx : web;
}

export const getFly = () => {
  const Fly = getFlyEngine();
  return new Fly();
};
