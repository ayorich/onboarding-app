import { call, put, takeLeading } from 'redux-saga/effects';

import { createAction } from '@reduxjs/toolkit';
import { getUsersRequest } from './users-api';
import { slice, updateUsers } from './users-reducer';

const loadUsers = createAction(`${slice}/fetch`);

function* handleFetchUsers() {
  const users = yield call(getUsersRequest);

  yield put(updateUsers(users));
}

function* watchLoadUsers() {
  yield takeLeading(loadUsers.type, handleFetchUsers);
}

export { handleFetchUsers, loadUsers, watchLoadUsers };
