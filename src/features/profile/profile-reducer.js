import { createSlice } from '@reduxjs/toolkit';
import { pipe, prop } from 'ramda';

const slice = 'profile';
const initialState = { name: '' };

export const {
  actions: { userUpdated },
  reducer,
} = createSlice({
  name: slice,
  initialState,
  reducers: {
    userUpdated: (state, { payload }) => {
      state.name = payload.name;
    },
  },
});

/**
 * SELECTORS
 */

const getProfileSlice = (state) => state[slice];

const getUserName = pipe(getProfileSlice, prop('name'));

export { getUserName, slice };
