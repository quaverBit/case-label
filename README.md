## Installation

Please rename the file `example.env` to `.env` and edit it with all environment variables needed inside.

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm install && npm run start

# Docker compose

Docker-compose:
# development mode
$ docker-compose up dev

# testing mode
$ docker-compose up unit-testing

# production mode
$ docker-compose up prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
