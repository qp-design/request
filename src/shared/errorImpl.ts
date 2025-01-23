import { wxLogin } from './wxLogin';
import { getKey, getTaro, getEnv, removeStorage } from '../tools';
import { message } from './message';

async function isTaroImpl(data: { msg: string; errorCode: string }, options: any, fly: any) {
  const Taro = getTaro();
  if (data.errorCode === 'nologin') {
    const key = getKey();
    Taro.removeStorageSync(key);
    return await wxLogin(options, fly, Taro);
    // 自定义登录页面
  }
  const msg = data.msg || '接口失败';
  Taro.showToast({
    title: msg,
    icon: msg.length > 7 ? 'none' : 'error',
    duration: 1000
  });
  return Promise.reject(data.msg || '接口失败');
}

let isNoLogin = false;
function isWebImpl(data: { msg: string; errorCode: string }) {
  if (data.errorCode === 'nologin') {
    if (isNoLogin) {
      return;
    }
    isNoLogin = true;
    message(data.msg || '接口报错');
  } else {
    message(data.msg || '接口报错');
  }
  if (data.errorCode === 'nologin') {
    if (process.env.isHash) {
      window.location.hash = process.env.isHash;
      isNoLogin = false;
    } else if (process.env.isHistory) {
      window.history.pushState(null, '', process.env.isHistory);
      isNoLogin = true;
    } else {
      const key = getKey();
      if (!localStorage.getItem(key)) return;
      try {
        if (process.env.REACT_APP_NO_LOAD) {
          return;
        }
        removeStorage(key);
        window.location.reload();
      } catch (err) {
        removeStorage(key);
        window.location.reload();
      }
    }
  }
  return Promise.reject(data.msg || '接口失败');
}

export const errorImpl = (data: { msg: string; errorCode: string }, options: any, fly: any) => {
  const isTaro = getEnv();

  const fn = isTaro ? isTaroImpl : isWebImpl;

  return fn(data, options, fly);
};
