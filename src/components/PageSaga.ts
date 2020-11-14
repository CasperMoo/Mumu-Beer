import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Creators, Types } from './PageActions'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchApi(action: any) {
  const timestamp = action.timestamp
  yield put(Creators.updateResponse(`Loading... Started At ${timestamp}`))
  yield call(simulateRequest, 3000)
  yield put(Creators.updateResponse(`Done`))
}

function simulateRequest(timeout: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout)
  })
}

function* PageSaga() {
  yield takeLatest(Types.FETCH_JSON, fetchApi)
}

export default PageSaga
