import * as LERNA_CONSTANTS from '../src/lerna-constants';

describe('@bhague1281/lerna-constants', () => {
  it('should export the correct constants', () => {
    expect(LERNA_CONSTANTS).toMatchSnapshot();
  });
});
