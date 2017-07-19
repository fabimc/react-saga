/**
 * Forexpage selectors
 */

import { createSelector } from 'reselect'

const selectForex = state => state.get('forex')

const makeSelectBase = () =>
  createSelector(selectForex, forexState => forexState.get('base'))

const makeSelectRates = () =>
  createSelector(
    selectForex,
    forexState =>
      Object
        .entries(forexState.getIn([ 'ratesData', 'rates' ]))
        .map(([ base, value ]) => ({ base, value }))
  )
export { selectForex, makeSelectBase, makeSelectRates }
