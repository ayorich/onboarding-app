import { all } from 'redux-saga/effects';
import { watchLoadUsers } from '../features/users/users-saga';

function* rootSaga() {
  yield all([watchLoadUsers()]);
}

export default rootSaga;
