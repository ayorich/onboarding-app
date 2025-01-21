import {
  reducer as profileReducer,
  slice as profileSlice,
} from '@features/profile/profile-reducer';
import {
  reducer as usersReducer,
  slice as usersSlice,
} from '@features/users/users-reducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [profileSlice]: profileReducer,
  [usersSlice]: usersReducer,
});
