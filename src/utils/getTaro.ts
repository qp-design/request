let Taro = { default: '' } as any;

export async function getTaro() {
  if (!Taro.default) {
    Taro = await import('@tarojs/taro');
  }
  return Taro.default;
}
