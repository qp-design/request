import { isWechat } from '@/utils';
function getFlyEngine() {
  const path = isWechat ? 'flyio/dist/npm/wx' : 'flyio/dist/npm/fly';
  return require(path);
}

export const getFly = () => {
  const Fly = getFlyEngine();
  return new Fly();
};
