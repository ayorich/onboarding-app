import {
  reducer as profileReducer,
  slice as profileSlice,
} from '@features/profile/profile-reducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [profileSlice]: profileReducer,
});
