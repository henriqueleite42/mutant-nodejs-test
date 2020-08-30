import UserController from "..";

test("UserController/getAllWebsites", async () => {
  const userController = new UserController();

  const websites = await userController.getAllWebsites();

  const expectedWebsites = [
    "hildegard.org",
    "anastasia.net",
    "ramiro.info",
    "kale.biz",
    "demarco.info",
    "ola.org",
    "elvis.io",
    "jacynthe.com",
    "conrad.com",
    "ambrose.net",
  ];

  const hasTheSameLength = expectedWebsites.length === websites.length;

  const hasTheSameValues = expectedWebsites.every((website) =>
    websites.includes(website)
  );

  expect(hasTheSameLength && hasTheSameValues).toBe(true);
});
