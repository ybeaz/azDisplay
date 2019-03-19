import { all, fork } from 'redux-saga/effects'

import getSavedUserVisitActionsWatcher from './getSavedUserVisitActions.saga'

export default function *indexSaga() {
  yield all([
    fork(getSavedUserVisitActionsWatcher),
  ])
}
