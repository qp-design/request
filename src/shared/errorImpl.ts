import { wxLogin } from './wxLogin';
import { getKey, getTaro, getEnv, removeStorage } from '@/utils';
import { message } from './message';

function initFunc() {
  const isTaro = getEnv();

  async function isTaroImpl(data: { msg: string; errorCode: string }, options: any, fly: any) {
    const Taro = await getTaro();
    if (data.errorCode === 'nologin') {
      const key = getKey();
      await removeStorage(key);
      return await wxLogin(options, fly);
    }
    Taro.showToast({
      title: data.msg || '接口失败',
      icon: 'error',
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

  return isTaro ? isTaroImpl : isWebImpl;
}

export const errorImpl = initFunc();
