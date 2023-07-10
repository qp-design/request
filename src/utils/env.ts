let taroEnv = '';
export function getTaroEnv(Taro: any) {
  if (!taroEnv) {
    taroEnv = Taro.getEnv();
    return taroEnv
  }
  return taroEnv;
}
