import { omit } from 'lodash-es';
export const formDataTrans = (params: any) => {
  const formData = new FormData();
  for (let i in params) {
    if (['', undefined, null].includes(params[i])) {
      continue;
    }
    formData.append(i, params[i]);
  }

  return formData;
};

export const getParams = (params = {}) => {
  return omit(params, 'isLocalMock');
};
