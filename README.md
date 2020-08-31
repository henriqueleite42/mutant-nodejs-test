# Mutant - NodeJS Developer Test

This project was made to test Henrique Leite's skills, it's a REST API that returns users data.

## Getting Started

### Recomended Dependencies

- [Ubunto based linux distro](https://ubuntu.com/)
- [Docker](https://www.docker.com/)
- [Make](https://askubuntu.com/questions/161104/how-do-i-install-make)
- [Yarn](https://classic.yarnpkg.com/en/)

### Installing

If you don't have acess to the `make` command, run this:

```sh
sudo apt-get install build-essential
```

Docker:

Follow the official documentation: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)

Clone the project:

```sh
git clone git@github.com:henriqueleite42/mutant-nodejs-test.git

cd mutant-nodejs-test
```

### Executing

With `make` and Docker:

```sh
sudo make up
```

With only Docker:

```sh
docker build -t henriqueleite42-mutant-nodejs-test .

docker run -d -t --rm -p=8080:8080 --name="henriqueleite42-mutant-nodejs-test" henriqueleite42-mutant-nodejs-test
```

### Stoping

To stop the program from running, run:

With `make` and Docker:

```sh
sudo make stop
```

With only Docker:

```sh
docker stop henriqueleite42-mutant-nodejs-test
```

### Working with ElasticSearch

To work with ElasticSearch, you need to run the command:

With `make`:

```sh
sudo make elastic
```

Without `make`:

```sh
echo ELASTIC_API_URL=\\nELASTIC_USER=\\nELASTIC_PASS= > .env
```

And set the values of these three variables in the `.env` file:

```sh
ELASTIC_USER = ${ ElasticSearch_User }
ELASTIC_PASS = ${ ElasticSearch_Password }
ELASTIC_API_URL = ${ ElasticSearch_API_url }
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

Install `yarn`:

Follow the official documentation: [https://classic.yarnpkg.com/en/docs/install](https://classic.yarnpkg.com/en/docs/install)

Install the application locally:

```sh
yarn
```

Run the tests with the command:

```sh
yarn test
```
