FROM node:14.16.0

WORKDIR /usr/src/app

ENV NODE_ENV development

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --silent

COPY index.html ./
COPY tsconfig.json  postcss.config.js tailwind.config.js vite.config.ts ./
COPY ./src/ ./src/

CMD ["yarn", "dev"]