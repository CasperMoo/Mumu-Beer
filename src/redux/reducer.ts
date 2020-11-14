import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './state'
import HANDLERS from '../components/PageReducers'
import { all } from 'redux-saga/effects'
import PageSaga from '../components/PageSaga'

export const Reducers = createReducer(INITIAL_STATE, HANDLERS)

export const Sagas = function* () {
  yield all([PageSaga()])
}
