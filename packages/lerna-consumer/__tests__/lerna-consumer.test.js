import {lernaConsumer} from '../src/lerna-consumer';

describe('@bhague1281/lerna-constants', () => {
  it('should return the correct constants', () => {
    expect(lernaConsumer()).toMatchSnapshot();
  });
});
