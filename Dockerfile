# FROM letsventure/build:latest

# RUN apk update && apk add --no-cache fontconfig curl curl-dev && \
#     mkdir -p /usr/share && \
#     cd /usr/share \
#     && curl -L https://github.com/Overbryd/docker-phantomjs-alpine/releases/download/2.11/phantomjs-alpine-x86_64.tar.bz2 | tar xj \
#     && ln -s /usr/share/phantomjs/phantomjs /usr/bin/phantomjs \
#     && phantomjs --version
FROM node:8

WORKDIR /usr/src/app

# Bundle app source
COPY . .

# RUN npm install --build-from-source=bcrypt
RUN npm install --quite
RUN npm run build

EXPOSE 80

# start app
CMD [ "npm","start" ]