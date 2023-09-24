# Datei: webserver/nginx/docker/Dockerfile (docker/docker-web)
FROM node:latest
WORKDIR /src
COPY package.json /src
RUN npm i --production
COPY server.js /src
EXPOSE 3000
CMD [ "node", "server.js" ]