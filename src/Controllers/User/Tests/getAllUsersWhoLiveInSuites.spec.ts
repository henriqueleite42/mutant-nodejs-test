import UserController from "..";

test("UserController/getAllUsersWhoLiveInSuites", async () => {
  const userController = new UserController();

  const usersWhoLiveInSuites = await userController.getAllUsersWhoLiveInSuites();

  const usersNames = usersWhoLiveInSuites.map((user) => user.name);

  const expectedUserNames = [
    "Ervin Howell",
    "Clementine Bauch",
    "Chelsey Dietrich",
    "Kurtis Weissnat",
    "Nicholas Runolfsdottir V",
    "Glenna Reichert",
    "Clementina DuBuque",
  ];

  const hasTheSameLength = expectedUserNames.length === usersNames.length;

  const hasTheSameValues = expectedUserNames.every((name) =>
    usersNames.includes(name)
  );

  expect(hasTheSameLength && hasTheSameValues).toBe(true);
});
