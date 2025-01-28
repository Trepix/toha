FROM node:23.6.1-alpine3.21

WORKDIR /src

COPY package.json .

RUN yarn install -D

VOLUME /src
VOLUME /src/node_modules

ENTRYPOINT ["yarn"]