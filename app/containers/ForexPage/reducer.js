/*
 * ForereignexReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable'

import {
  CHANGE_BASE,
  LOAD_RATES_SUCCESS,
  LOAD_RATES,
  LOAD_RATES_ERROR
} from './constants'

// The initial state of the App
const initialState = fromJS({ base: '', ratesData: { rates: false } })

function forexReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_BASE:
      // Delete prefixed '@' from the github base
      return state.set('base', action.base.replace(/@/gi, ''))
    case LOAD_RATES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn([ 'ratesData', 'rates' ], false)
    case LOAD_RATES_SUCCESS:
      return state
        .setIn([ 'ratesData', 'rates' ], action.rates.rates)
        .setIn([ 'ratesData', 'base' ], action.rates.base)
        .setIn([ 'ratesData', 'date' ], action.rates.date)
        .set('loading', false)
    case LOAD_RATES_ERROR:
      return state.set('error', action.error).set('loading', false)
    default:
      return state
  }
}

export default forexReducer
