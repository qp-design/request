import { isWechat } from '@/utils';
function getFly() {
  const path = isWechat ? 'flyio/dist/npm/wx' : 'flyio/dist/npm/fly';
  return require(path);
}

export default getFly;
