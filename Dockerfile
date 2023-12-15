From node:lts-slim

WORKDIR /app

RUN npm -v && \
    apt update && \
    npm -v && \
    npm install yarn && \
    npm install -g npm@latest
