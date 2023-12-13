## Requirements
* [NodeJS](https://nodejs.org/en/download) (>=18.18.2)
* [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
* [Docker](https://docs.docker.com/desktop/install/mac-install)

## Installation

```bash
# install dependencies
$ yarn install

# copy .env file
$ cp .env.dist .env 

# for database (optional)
$ docker compose up -d

# run migrations
$ yarn run migrate:run
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Stay in touch

- Author - [Aydoğan Ak](https://github.com/aydgnak)

Coded with [NestJS](https://nestjs.com)