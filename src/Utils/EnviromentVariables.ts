/**
 * Responsible for allowing environment variables in development
 */
class EnviromentVariables {
  setVariables() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("dotenv").config();
    }
  }
}

export default EnviromentVariables;
