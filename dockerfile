FROM node:12.22.0-alpine as base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "index.js" ]
