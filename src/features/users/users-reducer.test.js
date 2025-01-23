import { createSlice } from "@reduxjs/toolkit";
import { pipe, prop } from "ramda";
import { updateUsers, reducer, selectUsers, slice } from "./users-reducer";

describe("users-reducer", () => {
  const initialState = { users: [], loading: false };

  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("should handle updateUsers", () => {
    const users = [{ id: 1, name: "John Doe" }];
    const action = { type: updateUsers.type, payload: users };
    const expectedState = { ...initialState, users };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  describe("selectors", () => {
    test("should select users slice", () => {
      const state = { [slice]: initialState };
      expect(selectUsers(state)).toEqual(initialState.users);
    });

    test("should select users from state", () => {
      const users = [{ id: 1, name: "John Doe" }];
      const state = { [slice]: { ...initialState, users } };
      expect(selectUsers(state)).toEqual(users);
    });
  });
});
