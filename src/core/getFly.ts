import { isWechat } from '@/utils';

function getFly() {
  const flag = isWechat();

  console.log(flag, '🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱');
  const path = flag ? 'flyio/dist/npm/wx' : 'flyio/dist/npm/fly';
  return require(path);
}

export default getFly;
