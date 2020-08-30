import LoggerController from "..";

import Fetch from "../../../Utils/Fetch";
import EnviromentVariables from "../../../Utils/EnviromentVariables";

new EnviromentVariables().setVariables();

test("LoggerController/create", async () => {
  const { ELASTIC_API_URL } = process.env;

  if (!ELASTIC_API_URL) return;

  const loggerController = new LoggerController();

  const log = {
    method: "test",
    url: "test",
    status: 0,
    remoteAddr: "test",
    responseTime: 0,
  };

  const logID = await loggerController.addToElastic(log);

  const fetch = new Fetch(ELASTIC_API_URL);

  const logElasticRequest = await fetch.get(`/logs/_doc/${logID}`);
  const logElastic = await logElasticRequest.json();

  const hasSameMethod = (logElastic._source.method = log.method);

  expect(hasSameMethod).toBe(true);
});
