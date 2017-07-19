/**
 * Tests for ForexPage sagas
 */

import { cancel, take, put, takeLatest } from 'redux-saga/effects'
import { createMockTask } from 'redux-saga/lib/utils'

import { LOCATION_CHANGE } from 'react-router-redux'

import { LOAD_RATES } from 'containers/ForexPage/constants'
import { ratesLoaded, ratesLoadingError } from 'containers/ForexPage/actions'

import { getRates, ratesData } from '../sagas'

const base = 'USD'

/* eslint-disable redux-saga/yield-effects */
describe('getRates Saga', () => {
  let getRatesGenerator

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getRatesGenerator = getRates()

    const selectDescriptor = getRatesGenerator.next().value
    expect(selectDescriptor).toMatchSnapshot()

    const callDescriptor = getRatesGenerator.next(base).value
    expect(callDescriptor).toMatchSnapshot()
  })

  it(
    'should dispatch the ratesLoaded action if it requests the data successfully',
    () => {
      const response = [ { name: 'First repo' }, { name: 'Second repo' } ]
      const putDescriptor = getRatesGenerator.next(response).value
      expect(putDescriptor).toEqual(put(ratesLoaded(response, base)))
    }
  )

  it('should call the ratesLoadingError action if the response errors', () => {
    const response = new Error('Some error')
    const putDescriptor = getRatesGenerator.throw(response).value
    expect(putDescriptor).toEqual(put(ratesLoadingError(response)))
  })
})

describe('ratesDataSaga Saga', () => {
  const ratesDataSaga = ratesData()
  const mockedTask = createMockTask()

  it('should start task to watch for LOAD_RATES action', () => {
    const takeLatestDescriptor = ratesDataSaga.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_RATES, getRates))
  })

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = ratesDataSaga.next(mockedTask).value
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE))
  })

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = ratesDataSaga.next().value
    expect(cancelDescriptor).toEqual(cancel(mockedTask))
  })
})
