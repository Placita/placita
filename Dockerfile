FROM node:14-buster-slim AS build-env

LABEL decription="Production image for Placita."

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

COPY app/ ./

FROM gcr.io/distroless/nodejs:14

COPY --from=build-env /usr/src/app /usr/src/app

HEALTHCHECK --interval=1m --timeout=5s --retries=2 \
  CMD curl -f http://localhost || exit 1

WORKDIR /usr/src/app

CMD ["app.js"]