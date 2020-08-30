import { uuid } from "uuidv4";

import ElasticSearch from "@Services/ElasticSearch";

import { ILog } from "@Types/Logger";

class LoggerController {
  /**
   * Create Log on ElasticSearch
   */
  async addToElastic(log: ILog) {
    const elastic = new ElasticSearch("logs");

    await elastic.create({
      id: uuid(),
      data: log,
    });

    return uuid;
  }
}

export default LoggerController;
