# Development docker image

FROM node:12-stretch

RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# For security reasons don't run operations as the root user
USER node

RUN mkdir /home/node/auth-server

WORKDIR /home/node/auth-server

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

ENV NODE_ENV=development

# RUN yarn build

CMD ["yarn", "start"]
