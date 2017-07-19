import { fromJS } from 'immutable'

import { selectForex, makeSelectBase } from '../selectors'

describe('selectForex', () => {
  it('should select the home state', () => {
    const forexState = fromJS({ ratesData: {} })
    const mockedState = fromJS({ forex: forexState })
    expect(selectForex(mockedState)).toEqual(forexState)
  })
})

describe('makeSelectBase', () => {
  const baseSelector = makeSelectBase()
  it('should select the base', () => {
    const base = 'USD'
    const mockedState = fromJS({ forex: { base } })
    expect(baseSelector(mockedState)).toEqual(base)
  })
})
