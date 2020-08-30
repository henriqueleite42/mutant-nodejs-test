import { IAddToElasticParams } from "./types";

import EnviromentVariables from "@Utils/EnviromentVariables";
import Fetch from "@Utils/Fetch";

new EnviromentVariables().setVariables();

/**
 * Responsible for linking the app with ElasticSearch
 */
class ElasticSearch {
  private _elastic?: Fetch;
  private _index?: string;

  constructor(index?: string) {
    const { ELASTIC_USER, ELASTIC_PASS, ELASTIC_API_URL } = process.env;

    if (!ELASTIC_USER || !ELASTIC_PASS || !ELASTIC_API_URL) return;

    const user = Buffer.from(ELASTIC_USER, "utf-8").toString("base64");
    const pass = Buffer.from(ELASTIC_PASS, "utf-8").toString("base64");

    this._elastic = new Fetch(ELASTIC_API_URL, {
      Authorization: `Basic ${user}:${pass}`,
    });

    this._index = index;
  }

  async create({ id, index, data }: IAddToElasticParams) {
    if (!this._elastic) return;

    if (!index && !this._index) {
      throw new Error("Invalid index");
    }

    await this._elastic.put(`/${index || this._index}/_doc/${id}`, data);
  }
}

export default ElasticSearch;
