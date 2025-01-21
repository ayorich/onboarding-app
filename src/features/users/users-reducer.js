import { createSlice } from '@reduxjs/toolkit';
import { pipe, prop } from 'ramda';

const slice = 'users';
const initialState = { users: [], loading: false };

export const {
  actions: { updateUsers },
  reducer,
} = createSlice({
  name: slice,
  initialState,
  reducers: {
    updateUsers: (state, { payload }) => {
      state.users = payload;
    },
  },
});

/**
 * SELECTORS
 */

const getUsersSlice = (state) => state[slice];

const selectUsers = pipe(getUsersSlice, prop('users'));

export { selectUsers, slice };
