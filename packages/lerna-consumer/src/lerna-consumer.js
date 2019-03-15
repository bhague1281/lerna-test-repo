import {TEST1, TEST2, TEST3} from '@bhague1281/lerna-constants';

export const lernaConsumer = () => {
  return {
    meta: {
      info: 'This is a lerna consumer consuming constants'
    },
    TEST1,
    TEST2,
    TEST3
  };
};
