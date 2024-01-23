FROM node:lts-slim

EXPOSE 3000

WORKDIR /app

COPY ./ /app/

RUN npm -v && \
    apt update && \
    apt install git-all -y && \
    npm install yarn && \
    npm install -g npm@latest && \
    npm -v

CMD ["npm", "run", "dev"]