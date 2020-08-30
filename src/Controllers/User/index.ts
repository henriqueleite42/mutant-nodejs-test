import { IGetUserBasicDataSortedAlphabeticallyParams } from "./types";

import Fetch from "@Utils/Fetch";

import { IUser } from "@Types/User";

class UserController {
  /**
   * Returns data for all registered users
   */
  async getAllUers() {
    const users = await this.getUsers();

    return users;
  }

  /**
   * Returns the websites of all registered users
   */
  async getAllWebsites() {
    const users = await this.getUsers();

    return users.map((user) => user.website);
  }

  /**
   * Returns the names, emails and company names of all registered users
   */
  async getUserBasicDataSortedAlphabetically({
    sort,
    order,
  }: IGetUserBasicDataSortedAlphabeticallyParams) {
    const users = await this.getUsers();

    const userBasicData = users.map((user) => ({
      name: user.name,
      email: user.email,
      company: user.company.name,
    }));

    const userBasicDataSortedAlphabetically = userBasicData.sort((a, b) => {
      if (a[sort] < b[sort]) return -1;
      if (a[sort] > b[sort]) return 1;
      return 0;
    });

    if (order === "desc") {
      return userBasicDataSortedAlphabetically.reverse();
    }

    return userBasicDataSortedAlphabetically;
  }

  /**
   * Returns data for all users living in suites
   */
  async getAllUsersWhoLiveInSuites() {
    const users = await this.getUsers();

    const usersFiltered = users.filter((user) => {
      return /suite/gi.test(user.address.suite);
    });

    return usersFiltered;
  }

  /**
   * Returns data for all users, to be used by methods of the class
   */
  private async getUsers() {
    const fetch = new Fetch("https://jsonplaceholder.typicode.com");

    const usersRequestResponse = await fetch.get("/users");
    const usersData = await usersRequestResponse.json();

    return usersData as Array<IUser>;
  }
}

export default UserController;
