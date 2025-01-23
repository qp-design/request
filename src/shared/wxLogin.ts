import { getTaroEnv } from '@/utils';

let isNeedLogin = false;

// 失败请求队列
let requestList: Array<any> = [];

export async function wxLogin(options: any, fly: any, Taro: any) {
  return new Promise((resolve, reject) => {
    requestList.push({
      handler: () => fly.request(options),
      resolve,
      reject
    });
    if (!isNeedLogin) {
      isNeedLogin = true;
      const taroEnv = getTaroEnv(Taro);
      Taro.showModal({
        title: '您还未登录',
        content: '请先登录再继续操作',
        success: function (res: any) {
          if (res.confirm) {
            switch (taroEnv) {
              case 'WEAPP':
                weappLogin(Taro);
                break;
              case 'WEB':
                webLogin(Taro);
                break;
            }
          } else if (res.cancel) {
            isNeedLogin = false;
            console.log('用户点击取消');
          }
        }
      });
    }
  });
}
function weappLogin(Taro: any) {
  setTimeout(() => {
    /* 任务中将运行的代码 */
    Taro.navigateTo({
      url: '/account/auth/index'
    });
  }, 10);
}
//
function webLogin(Taro: any) {
  setTimeout(() => {
    /* 任务中将运行的代码 */
    Taro.navigateTo({
      url: '/account/mobileLogin/index'
    });
  }, 10);
}


export const errorCallback = () => {
  resetStatus();
  requestList.forEach(async (item) => {
    const resolve = item.resolve;
    const reject = item.reject;
    try {
      const data = await item.handler();
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
  requestList = [];
};

export const resetStatus = () => {
  isNeedLogin = false;
};
