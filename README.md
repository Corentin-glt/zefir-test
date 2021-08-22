# :rocket: Test Zefir

## Requirements

### Yarn

I recommand to use `yarn` as package manager (https://yarnpkg.com).
You can install it with `npm install -g yarn`.

### Docker

Without docker you won't be able to launch the application (https://www.docker.com/).

## Usage

### Set up your environment

Create a `.env` file from `.env.example` at the root of the repository and fill it.

### Download

Please to follow these steps from the root of the repo:
1- `rm -rf packages/api`
2- `git clone https://github.com/Corentin-glt/zefir-api.git packages/api`

### Install dependencies

Just run the command `yarn installation` at the root of the repository.

### Start the application

When your environment is set up, you can run the command `yarn start` to start the application.

### Stop the application

Just run the command `yarn stop` and it will stop the application.

## Service Map

| Service     | Url                            |
| ----------- | ------------------------------ |
| Web App     | http://localhost:3000          |
| GraphQL API | https://localhost:4400/graphql |
