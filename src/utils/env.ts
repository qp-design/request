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
