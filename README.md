# Weather App Service


**[DEMO Weather App Web](https://jpalma-weather-app-frontend.herokuapp.com/login)**

**[DEMO Weather App API](https://jpalma-weather-app-backend.herokuapp.com/)** 

## Technologies
- TypeScript
- Node v16.14.2.
- [Express](http://expressjs.com/) - base HTTP server
- [TypeORM](https://typeorm.github.io/) - ORM/database/migrations
- [Nest](https://nestjs.com/) - routing/request/reponse handling
- Auth0
- Docker
- Heroku


## Env variable
Create `.env` file based on `sample.env`.
Fill up the correct configurations in `.env` file

```
PORT=
AUTH0_ISSUER_URL=
AUTH0_AUDIENCE=
WEATHER_API_BASE_URL=
WEATHER_API_KEY=
```

## Quick Start

Get started developing...

```shell
# install deps
npm install

# run in development mode
npm run start:dev

# run tests
npm run test
```

---

## Install Dependencies

npm install


---

## Run It
#### Run in *development* mode:
Runs the application is development mode. Should not be used in production

```shell
npm run start:dev
```

or debug it

```shell
npm run start:debug
```

#### Run in *production* mode:

Compiles the application and starts it in production production mode.

```shell
npm run build
npm run start
```


**API URL:** http://localhost:3000/api

**Swagger Docs URL:** http://localhost:3000

## Testing
### Run automated tests

```shell
# unit tests
npm run test

# end-to-end tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Debug It

#### Debug the server:

```
npm run start:debug
```

#### Debug Tests

```
npm run test:debug
```

## Generators
> Note: Install nest-cli globally
```shell
npm install -g @nestjs/cli

# Generate a new module
nest generate module user

# Generate a new controller
nest generate controller user

# Generate a new service
nest generate service user
```

Here's the list of command in [Nest-cli Docs](https://docs.nestjs.com/cli/usages#nest-generate).

## Development docs

Additional documentation for developers of the service can be found in the [docs-folder](docs/).



## Deploy to Heroku

heroku create jpalma-weather-app-backend

heroku container:push web --app jpalma-weather-app-frbackendontend

heroku container:release web --app jpalma-weather-app-backend

heroku config:set PORT=$PORT AUTH0_ISSUER_URL=$AUTH0_ISSUER_URL AUTH0_AUDIENCE=$AUTH0_AUDIENCE WEATHER_API_BASE_URL=$WEATHER_API_BASE_URL WEATHER_API_KEY=$WEATHER_API_KEY --app <project-name

Create heroku.yml
```
build:
  docker:
    web: Dockerfile

```