FROM node:lts-alpine

LABEL decription="Production image for Placita."

WORKDIR /usr/src/app

COPY package.json .

COPY yarn.lock .

RUN yarn install --production

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
