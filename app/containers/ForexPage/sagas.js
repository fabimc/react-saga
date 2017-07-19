/**
 * Gets the ratesitories of the user from Github
 */

import {
  take,
  call,
  put,
  select,
  cancel,
  takeLatest
} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { LOAD_RATES } from 'containers/ForexPage/constants'
import { ratesLoadingError, ratesLoaded } from 'containers/ForexPage/actions'

import request from 'utils/request'
import { makeSelectBase } from 'containers/ForexPage/selectors'

/**
 * Github rates request/response handler
 */
export function* getRates () {
  // Select base from store
  const base = yield select(makeSelectBase())
  const requestURL = `http://api.fixer.io/latest?base=${base}`

  try {
    // Call our request helper (see 'utils/request')
    const rates = yield call(request, requestURL)
    yield put(ratesLoaded(rates, base))
  } catch (err) {
    yield put(ratesLoadingError(err))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* ratesData () {
  // Watches for LOAD_RATES actions and calls getRates when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_RATES, getRates)

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

// Bootstrap sagas
export default [ ratesData ]
