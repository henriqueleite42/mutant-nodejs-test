# Mutant - NodeJS Developer Test

This project was made to test Henrique Leite's skills, it's a REST API that returns users data.

## Getting Started

### Recomended Dependencies

- Ubunto based linux distro
- Docker ^19.0.0

### Installing

```sh
git clone git@github.com:henriqueleite42/mutant-nodejs-test.git

cd mutant-nodejs-test
```

### Executing

```sh
sudo make up
```

### Stoping

To stop the program from running, run:

```sh
sudo make stop
```

### Working with ElasticSearch

To work with ElasticSearch, you need to create a `.env` file in the root of the project, and add these three variables:

```sh
ELASTIC_USER = ElasticSearch_User
ELASTIC_PASS = ElasticSearch_Password
ELASTIC_API_URL = ElasticSearch_API_url
```

## Routes

After run the app, send a GET request to `http://localhost:8080` and this will return a tutorial about the routes

## Tips

In case you use the browser to make requests, it's recommended to use the [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) plugin

## Help

For more information on the commands available, run:

```sh
sudo make help
```

## Tests

To run the tests, you must first install the application locally:

```sh
yarn
```

After this, you can run the tests with the command:

```sh
yarn test
```
