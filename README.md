## Requirements

* [NodeJS](https://nodejs.org/en/download) (>=20.10.0)
* [npm](https://www.npmjs.com) (>=10.2.5)
* [Docker](https://docs.docker.com/desktop/install/mac-install) (optional)

## Installation

```bash
# install dependencies
$ npm install

# copy .env file
$ cp .env.dist .env 

# for database (optional)
$ docker compose up -d

# run migrations
$ npm run migrate:run
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

Coded with [NestJS](https://nestjs.com)