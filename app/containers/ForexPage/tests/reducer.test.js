import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  changeBase,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      base: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeBase action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('base', fixture);

    expect(homeReducer(state, changeBase(fixture))).toEqual(expectedResult);
  });
});
