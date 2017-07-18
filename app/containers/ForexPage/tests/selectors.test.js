import { fromJS } from 'immutable';

import {
  selectForex,
  makeSelectBase,
} from '../selectors';

describe('selectForex', () => {
  it('should select the home state', () => {
    const forexState = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      home: forexState,
    });
    expect(selectForex(mockedState)).toEqual(forexState);
  });
});

describe('makeSelectBase', () => {
  const baseSelector = makeSelectBase();
  it('should select the base', () => {
    const base = 'mxstbr';
    const mockedState = fromJS({
      home: {
        base,
      },
    });
    expect(baseSelector(mockedState)).toEqual(base);
  });
});
