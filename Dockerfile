FROM node:15.12.0-alpine3.10 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:15.12.0-alpine3.10 AS testing

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development
COPY . .
CMD [ "npm", "run", "test" ]


FROM node:15.12.0-alpine3.10 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]