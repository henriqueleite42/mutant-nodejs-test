import UserController from "..";

import { IGetUserBasicDataSortedAlphabeticallyParams } from "../types";

interface IDataToTest {
  params: IGetUserBasicDataSortedAlphabeticallyParams;
  expectedOutput: Array<string>;
}

const dataToTest: Array<IDataToTest> = [
  {
    params: {
      sort: "name",
      order: "asc",
    },
    expectedOutput: [
      "Chelsey Dietrich",
      "Clementina DuBuque",
      "Clementine Bauch",
      "Ervin Howell",
      "Glenna Reichert",
      "Kurtis Weissnat",
      "Leanne Graham",
      "Mrs. Dennis Schulist",
      "Nicholas Runolfsdottir V",
      "Patricia Lebsack",
    ],
  },
  {
    params: {
      sort: "name",
      order: "desc",
    },
    expectedOutput: [
      "Patricia Lebsack",
      "Nicholas Runolfsdottir V",
      "Mrs. Dennis Schulist",
      "Leanne Graham",
      "Kurtis Weissnat",
      "Glenna Reichert",
      "Ervin Howell",
      "Clementine Bauch",
      "Clementina DuBuque",
      "Chelsey Dietrich",
    ],
  },
  {
    params: {
      sort: "email",
      order: "asc",
    },
    expectedOutput: [
      "Chaim_McDermott@dana.io",
      "Julianne.OConner@kory.org",
      "Karley_Dach@jasper.info",
      "Lucio_Hettinger@annie.ca",
      "Nathan@yesenia.net",
      "Rey.Padberg@karina.biz",
      "Shanna@melissa.tv",
      "Sherwood@rosamond.me",
      "Sincere@april.biz",
      "Telly.Hoeger@billy.biz",
    ],
  },
  {
    params: {
      sort: "email",
      order: "desc",
    },
    expectedOutput: [
      "Telly.Hoeger@billy.biz",
      "Sincere@april.biz",
      "Sherwood@rosamond.me",
      "Shanna@melissa.tv",
      "Rey.Padberg@karina.biz",
      "Nathan@yesenia.net",
      "Lucio_Hettinger@annie.ca",
      "Karley_Dach@jasper.info",
      "Julianne.OConner@kory.org",
      "Chaim_McDermott@dana.io",
    ],
  },
  {
    params: {
      sort: "company",
      order: "asc",
    },
    expectedOutput: [
      "Abernathy Group",
      "Considine-Lockman",
      "Deckow-Crist",
      "Hoeger LLC",
      "Johns Group",
      "Keebler LLC",
      "Robel-Corkery",
      "Romaguera-Crona",
      "Romaguera-Jacobson",
      "Yost and Sons",
    ],
  },
  {
    params: {
      sort: "company",
      order: "desc",
    },
    expectedOutput: [
      "Yost and Sons",
      "Romaguera-Jacobson",
      "Romaguera-Crona",
      "Robel-Corkery",
      "Keebler LLC",
      "Johns Group",
      "Hoeger LLC",
      "Deckow-Crist",
      "Considine-Lockman",
      "Abernathy Group",
    ],
  },
];

function getTestName(params: IGetUserBasicDataSortedAlphabeticallyParams) {
  const paramsUrl = Object.keys(params)
    .map((key) => {
      const value =
        params[key as keyof IGetUserBasicDataSortedAlphabeticallyParams];

      return `${key}=${value}`;
    })
    .join("&");

  return `UserController/getUserBasicDataSortedAlphabetically?${paramsUrl}`;
}

async function check({ params, expectedOutput }: IDataToTest) {
  const userController = new UserController();

  const usersSortedAlphabetically = await userController.getUserBasicDataSortedAlphabetically(
    params
  );

  const functionResult = usersSortedAlphabetically.map(
    (user) => user[params.sort]
  );

  const hasTheSameLength = expectedOutput.length === functionResult.length;

  const hasTheSameValues = expectedOutput.every((value) =>
    functionResult.includes(value)
  );

  return hasTheSameLength && hasTheSameValues;
}

test(getTestName(dataToTest[0].params), async () => {
  const result = await check(dataToTest[0]);
  expect(result).toBe(true);
});

test(getTestName(dataToTest[1].params), async () => {
  const result = await check(dataToTest[1]);
  expect(result).toBe(true);
});

test(getTestName(dataToTest[2].params), async () => {
  const result = await check(dataToTest[2]);
  expect(result).toBe(true);
});

test(getTestName(dataToTest[3].params), async () => {
  const result = await check(dataToTest[3]);
  expect(result).toBe(true);
});

test(getTestName(dataToTest[4].params), async () => {
  const result = await check(dataToTest[4]);
  expect(result).toBe(true);
});

test(getTestName(dataToTest[5].params), async () => {
  const result = await check(dataToTest[5]);
  expect(result).toBe(true);
});
