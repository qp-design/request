import { getFly } from './getFly';
import { getKey, getTokenValueKey, getStorage, getBaseUrl } from '@brushes/utils';
import { isWechat } from '@/utils';
import { errorImpl } from '@/shared/errorImpl';

const fly = getFly();
//添加请求拦截器
fly.interceptors.request.use((request: { baseURL: string | undefined; headers: { [x: string]: any }; body: any }) => {
  //给所有请求添加自定义header
  const key = getKey();
  const token = getTokenValueKey();
  request.headers[key] = getStorage(token);
  request.baseURL = getBaseUrl();
  if (isWechat) {
    request.headers['Saas-Agent'] = 'qj-wemini';
  }
  //打印出请求体
  // console.log(request.body);
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

const isError = (data: any) => {
  return data.errorCode || data.success === false;
};

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  async (response: { data: any; request: any }) => {
    //只将请求结果的data字段返回
    const data = response.data;

    if (isError(data)) {
      return await errorImpl(data, response.request, fly);
    }
    return data;
  },
  (err: any) => {
    console.log(err);
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
  }
);

export default fly;
