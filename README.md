# RESTful MongoDB Template

## Config

1. copy .env.example to .env
2. set relevant env keys

## Installation

```bash
# install deps
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

## Docker

```bash
# first update the uri to refer to the db container
# use the command below to bring up the setup
$ docker-compose up
```
