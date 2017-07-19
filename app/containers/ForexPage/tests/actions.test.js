import { CHANGE_BASE } from '../constants'

import { changeBase } from '../actions'

describe('Forex Actions', () => {
  describe('changeBase', () => {
    it('should return the correct type and the passed base', () => {
      const fixture = 'USD'
      const expectedResult = { type: CHANGE_BASE, base: fixture }

      expect(changeBase(fixture)).toEqual(expectedResult)
    })
  })
})
