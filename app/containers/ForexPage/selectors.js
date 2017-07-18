/**
 * Forexpage selectors
 */

import { createSelector } from 'reselect'

const selectForex = state => state.get('forex')

const makeSelectBase = () =>
  createSelector(selectForex, forexState => forexState.get('base'))

export { selectForex, makeSelectBase }
