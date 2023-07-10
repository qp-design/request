const taroEnv = '';
export function getTaroEnv(Taro: any) {
  if (!taroEnv) {
    return Taro.getEnv();
  }
  return taroEnv;
}
