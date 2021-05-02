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

## Docs

Open browser and go to http://localhost:3000/docs

## Mongo, Docker and Migrations

If you wish you can run `docker-compose up mondodb` to have a mongo instance, the connection uri will be something like: `mongodb://{username}:{password}@mongodb:27017` and to have a pre seeded dataset you can uncomment line 7 at main.ts: `import './migration.module';`

## Notes from the candidate

I am fully aware that this will lack a proper UI that was required in the exercice, but besided I am more fitted for a backend/devops/solutions architect position, I hope you will allow me to include documentation that provides some way to test all features.
Besides that you are invited to go to issues tab and watch all the features/bugs that I am aware.

