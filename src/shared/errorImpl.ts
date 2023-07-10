import { wxLogin } from './wxLogin';
import { getKey, getTaro, getEnv, removeStorage } from '@brushes/utils';
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

  async function isWebImpl(data: { msg: string; errorCode: string }) {
    message(data.msg || '接口报错');
    if (data.errorCode === 'nologin') {
      const key = getKey();
      if (!localStorage.getItem(key)) return;
      try {
        if (process.env.REACT_APP_NO_LOAD) {
          return;
        }
        await removeStorage(key);
        window.location.reload();
      } catch (err) {
        await removeStorage(key);
        window.location.reload();
      }
    }
    return Promise.reject(data.msg || '接口失败');
  }

export const errorImpl = (data: { msg: string; errorCode: string }, options: any, fly: any) => {
  const isTaro = getEnv();

  const fn = isTaro ? isTaroImpl : isWebImpl;

  return fn(data, options, fly)
};
