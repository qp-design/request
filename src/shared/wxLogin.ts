import { get } from 'lodash-es';
import { getTaro } from '@brushes/utils';

let isNeedLogin = false;

// 失败请求队列
let requestList: Array<any> = [];

export async function wxLogin(options: any, fly: any) {
  const Taro = await getTaro();
  return new Promise((resolve, reject) => {
    requestList.push({
      handler: () => fly.request(options),
      resolve
    });
    if (!isNeedLogin) {
      isNeedLogin = true;
      const { baseURL } = options;
      Taro.login({
        success: async function (result: { code: string }) {
          const response = await Taro.request({
            header: {
              'Saas-Agent': 'qj-wemini' // 默认值
            },
            url: baseURL + 'web/ml/mlogin/warrantyLogin.json',
            data: {
              js_code: result.code
            }
          });

          const res = response.data;
          // 异常情况
          if (!res.dataObj) {
            // 登录错误
            Taro.showToast({
              title: '无法登录',
              icon: 'error',
              duration: 1500
            });
            reject();
            return;
          }

          const isReister = get(res, 'dataObj.register', '') as string;
          const userOpenid = get(res, 'dataObj.userOpenid', '');
          Taro.setStorageSync('userOpenid', userOpenid);
          if (isReister === 'true') {
            // 去绑定
            Taro.navigateTo({
              url: '/append/bindIphone/index',
              success: function (res: any) {
                res.eventChannel.emit('handler', () => errorCallback(requestList));
              }
            });
            return;
          }

          const token = get(res, 'dataObj.userInfo', '{}');
          Taro.setStorageSync('saas-token', token);
          errorCallback(requestList);
        },
        complete: function () {
          isNeedLogin = false;
        }
      });
    }
  });
}

const errorCallback = (requestLists: Array<any>) => {
  requestLists.forEach(async (item) => {
    const resolve = item.resolve;
    const data = await item.handler();
    resolve(data);
  });
  requestList = [];
};
