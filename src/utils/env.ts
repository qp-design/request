export const isWechat = function () {
  //获取user-agaent标识头
  const ua = navigator.userAgent.toLowerCase();
  //判断ua和微信浏览器的标识头是否匹配
  try {
    //@ts-ignore
    return ua.match(/micromessenger/i) == 'micromessenger' || Boolean(wx);
  } catch (err) {
    return false;
  }
};

export function getEnv() {
  const ua = navigator.product;
  return ua.indexOf('Taro') !== -1;
}

export function getKey() {
  try {
    return process.env.REACT_APP_SESSION_KEY || 'saas-token';
  } catch (err) {
    return 'saas-token';
  }
}

export function getTokenValueKey() {
  try {
    return process.env.REACT_APP_SESSION_VALUE_KEY || 'saas-token';
  } catch (err) {
    return 'saas-token';
  }
}

export function getUrl() {
  try {
    return process.env.REACT_APP_BASE_URL || '';
  } catch (err) {
    return '';
  }
}
