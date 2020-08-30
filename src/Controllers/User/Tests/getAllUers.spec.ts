import UserController from "..";

test("UserController/getAllUers", async () => {
  const userController = new UserController();

  const allUsers = await userController.getAllUers();

  const usersIDs = allUsers.map((user) => user.id);

  const expectedUsersIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const hasTheSameLength = expectedUsersIDs.length === usersIDs.length;

  const hasTheSameValues = expectedUsersIDs.every((userID) =>
    usersIDs.includes(userID)
  );

  expect(hasTheSameLength && hasTheSameValues).toBe(true);
});
