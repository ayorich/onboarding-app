import { userUpdated, reducer, selectUserName } from "./profile-reducer";

describe("profile reducer", () => {
  const initialState = { name: "" };

  it("should handle initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle userUpdated", () => {
    const payload = { name: "John Doe" };
    const action = { type: userUpdated.type, payload };
    const expectedState = { name: "John Doe" };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});

describe("profile selectors", () => {
  const state = {
    profile: { name: "John Doe" },
  };

  it("should select the user name", () => {
    expect(selectUserName(state)).toEqual("John Doe");
  });
});
