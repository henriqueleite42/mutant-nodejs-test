import { Router } from "express";

import UserController from "@Controllers/User";
import { IGetUserBasicDataSortedAlphabeticallyParams } from "@Controllers/User/types";

import RequestLogger from "@Middlewares/RequestLogger";

const router = Router();

/**
 * Apply the Request Logger
 */
router.use(new RequestLogger().Logger);

/**
 * Returns all users data
 */
router.get("/all", async (req, res) => {
  const userController = new UserController();

  const allUsers = await userController.getAllUers();

  res.json(allUsers);
});

/**
 * Returns only the users websites
 */
router.get("/websites", async (req, res) => {
  const userController = new UserController();

  const websites = await userController.getAllWebsites();

  res.json(websites);
});

/**
 * Returns name, email and company name of all users, sorted alphabetically
 */
router.get("/basic-data", async (req, res) => {
  const userController = new UserController();

  const sort =
    (req.query?.sort as IGetUserBasicDataSortedAlphabeticallyParams["sort"]) ||
    "name";
  const order =
    (req.query
      ?.order as IGetUserBasicDataSortedAlphabeticallyParams["order"]) || "asc";

  const usersBasicData = await userController.getUserBasicDataSortedAlphabetically(
    {
      sort,
      order,
    }
  );

  res.json(usersBasicData);
});

/**
 * Returns all users who lives in suites
 */
router.get("/suites", async (req, res) => {
  const userController = new UserController();

  const userWhoLiveInSuites = await userController.getAllUsersWhoLiveInSuites();

  res.json(userWhoLiveInSuites);
});

export default router;
