import { createSlice } from '@reduxjs/toolkit';
import { pipe, prop } from 'ramda';

const slice = 'users';
const initialState = { users: [], loading: false };

export const {
  actions: { updateUsers, fetchingUsers },
  reducer,
} = createSlice({
  name: slice,
  initialState,
  reducers: {
    updateUsers: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
    },
    fetchingUsers: state => {
      state.loading = true;
    },
  },
});

/**
 * SELECTORS
 */

const getUsersSlice = state => state[slice];

const selectUsers = pipe(getUsersSlice, prop('users'));
const selectFetchingUsers = pipe(getUsersSlice, prop('loading'));

export { selectUsers, selectFetchingUsers, slice };
