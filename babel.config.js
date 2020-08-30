module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "module-resolver",
      {
        alias: {
          "@Controllers": "./src/Controllers",
          "@Services": "./src/Services",
          "@Utils": "./src/Utils",
          "@Middlewares": "./src/Middlewares",
          "@Routes": "./src/Routes",
          "@Assets": "./src/Assets",
          "@Types": "./src/Types",
        },
      },
    ],
  ],
  ignore: ["**/*.spec.ts"],
};
