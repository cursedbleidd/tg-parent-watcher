FROM node:20-alpine3.20 AS build

WORKDIR /app

RUN corepack enable
COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn ./.yarn
RUN yarn install

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn run build


FROM nginx:1.27.0-alpine3.19

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html

EXPOSE 3000

ENTRYPOINT ["nginx","-g","daemon off;"]