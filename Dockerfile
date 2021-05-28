FROM node:lts-buster-slim

LABEL decription="Production image for Placita."

WORKDIR /usr/src/app

HEALTHCHECK --interval=1m --timeout=5s --retries=2 \
  CMD curl -f http://localhost || exit 1

RUN rm /usr/bin/chage && rm /sbin/unix_chkpwd && rm /usr/bin/chsh && rm /usr/bin/gpasswd && \
  rm /bin/su && rm /usr/bin/expiry && rm /usr/bin/newgrp && rm /bin/mount && rm /usr/bin/chfn && \
  rm /bin/umount && rm /usr/bin/passwd && rm /usr/bin/wall

COPY package*.json ./

RUN npm ci

RUN groupadd -g 999 nonroot && useradd -r -u 999 -g nonroot nonroot

USER nonroot

COPY . .

EXPOSE 3000

CMD ["npm", "start"]