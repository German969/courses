FROM node:8-slim as base

LABEL org.opencontainers.image.authors=bret@bretfisher.com
LABEL org.opencontainers.image.title="Node.js Ultimate Dockerfile"
LABEL org.opencontainers.image.licenses=MIT
LABEL com.bretfisher.nodeversion=$NODE_VERSION

ENV NODE_ENV=production

# use a high port to run as non-root
EXPOSE 8080

WORKDIR /app

COPY package*.json ./

RUN npm config list

RUN npm ci \
    && npm cache clean --force

ENV PATH /app/node_modules/.bin:$PATH

ENV TINI_VERSION v0.18.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

CMD ["node", "server.js"]

#---DEV---#

FROM base as dev

ENV NODE_ENV=development

# NOTE: these apt dependencies are only needed
# for testing. they shouldn't be in production
RUN apt-get update -qq && apt-get install -qy \ 
    ca-certificates \
    bzip2 \
    curl \
    libfontconfig \
    --no-install-recommends

RUN npm config list

RUN npm install --only=development \
    && npm cache clean --force

USER node

CMD ["nodemon", "server.js"]

#---TEST---#

FROM dev as test

COPY . .

RUN npm audit

# aqua microscanner, which needs a token for API access
# note this isn't super secret, so we'll use an ARG here
# https://github.com/aquasecurity/microscanner /
ARG MICROSCANNER_TOKEN
ADD https://get.aquasec.com/microscanner /
USER root
RUN chmod +x /microscanner
RUN /microscanner $MICROSCANNER_TOKEN --continue-on-failure


#--pre-prod--#

FROM test as pre-prod

RUN rm -rf ./tests && rm -rf ./node_modules


#---PROD---#

FROM base as prod

COPY --from=pre-prod /app /app

HEALTHCHECK CMD curl http://127.0.0.1/ || exit 1

USER node

# COMMANDS

# docker build -t ultimatenode:dev --target dev .

# docker build -t ultimatenode:test --target test .

# docker build -t ultimatenode:prod --target prod .

# docker image ls

# docker run --init ultimatenode:test

# docker run --init ultimatenode:prod

# docker-compose up

# docker run -it ultimatenode:prod bash

# ls

# docker-compose up -d

# docker-compose exec result ./tests/tests.sh

# --- BONUS

# docker build --build-arg=MICROSCANNER_TOKEN=$MICROSCANNER -t ultimatenode:test --target test .

# DOCKER_BUILDKIT=1 docker build --build-arg=MICROSCANNER_TOKEN=$MICROSCANNER -t ultimatenode:test --target test .

# DOCKER_BUILDKIT=1 docker build --build-arg=MICROSCANNER_TOKEN=$MICROSCANNER -t ultimatenode:prod --target prod .

# dpcker run ultimatenode:prod

# BY DEFAULT YOU CAN'T RUN APPS IN LOW PORTS WITHOUT A ROOT USER
# CHANGE THE PORT IN CONTAINER