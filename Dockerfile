FROM node:14-buster AS build-env

LABEL decription="Production image for Placita."

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

COPY app .

FROM gcr.io/distroless/nodejs:14

WORKDIR /usr/src/app

COPY --from=build-env /usr/src/app .

HEALTHCHECK --interval=1m --timeout=5s --retries=2 \
  CMD curl -f http://68.183.107.24 || exit 1

CMD ["app.js"]