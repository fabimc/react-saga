import {
  CHANGE_BASE,
} from '../constants';

import {
  changeBase,
} from '../actions';

describe('Forex Actions', () => {
  describe('changeBase', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_BASE,
        name: fixture,
      };

      expect(changeBase(fixture)).toEqual(expectedResult);
    });
  });
});
