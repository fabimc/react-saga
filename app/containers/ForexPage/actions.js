/*
 * Forex Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_BASE,
  LOAD_RATES,
  LOAD_RATES_SUCCESS,
  LOAD_RATES_ERROR
} from './constants'

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_BASE
 */
export function changeBase (base) {
  return { type: CHANGE_BASE, base }
}

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRates () {
  return { type: LOAD_RATES }
}

/**
 * Dispatched when the rates are loaded by the request saga
 *
 * @param  {array} rates The rates data
 * @param  {string} base The current base
 *
 * @return {object}      An action object with a type of LOAD_RATES_SUCCESS passing the rates
 */
export function ratesLoaded (rates, base) {
  return { type: LOAD_RATES_SUCCESS, rates, base }
}

/**
 * Dispatched when loading the rates fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function ratesLoadingError (error) {
  return { type: LOAD_RATES_ERROR, error }
}
