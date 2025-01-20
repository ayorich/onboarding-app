import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  ['temp-not-used-to-avoid-crash']: (state = {}) => state,
});

export const rootState = rootReducer(undefined, { type: '' });
