import { runSaga } from "redux-saga";
import { takeLeading } from "redux-saga/effects";
import { handleFetchUsers, loadUsers, watchLoadUsers } from "./users-saga";
import { getUsersRequest } from "./users-api";
import { updateUsers } from "./users-reducer";
import { testSaga } from "redux-saga-test-plan";

jest.mock("./users-api");

describe("handleFetchUsers saga", () => {
  it("should fetch users and dispatch updateUsers action", async () => {
    const mockUsers = [{ id: 1, name: "John Doe" }];
    getUsersRequest.mockResolvedValue(mockUsers);

    const dispatchedActions = [];
    await runSaga(
      {
        dispatch: (action) => dispatchedActions.push(action),
      },
      handleFetchUsers,
    ).toPromise();

    expect(getUsersRequest).toHaveBeenCalledTimes(1);
    expect(dispatchedActions).toContainEqual(updateUsers(mockUsers));
  });

  it("should follow the correct saga flow", () => {
    const mockUsers = [{ id: 1, name: "John Doe" }];
    testSaga(handleFetchUsers)
      .next()
      .call(getUsersRequest)
      .next(mockUsers)
      .put(updateUsers(mockUsers))
      .next()
      .isDone();
  });
});

describe("watchLoadUsers saga", () => {
  it("should wait for loadUsers action and call handleFetchUsers", () => {
    const generator = watchLoadUsers();
    expect(generator.next().value).toEqual(
      takeLeading(loadUsers.type, handleFetchUsers),
    );
  });
});
