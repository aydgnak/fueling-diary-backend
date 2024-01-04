## Requirements

* [NodeJS](https://nodejs.org/en/download) (>=20.10.0)
* [npm](https://www.npmjs.com) (>=10.2.5)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) (>=1.22.19)
* [Docker](https://docs.docker.com/desktop/install/mac-install) (optional)

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

Coded with [NestJS](https://nestjs.com)