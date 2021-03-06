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

import { CHANGE_BASE } from './constants'

// The initial state of the App
const initialState = fromJS({ base: '' })

function forexReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_BASE:
      // Delete prefixed '@' from the github base
      return state.set('base', action.base.replace(/@/gi, ''))
    default:
      return state
  }
}

export default forexReducer
