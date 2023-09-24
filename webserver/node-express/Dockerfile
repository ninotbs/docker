# Datei: webserver/node-express/Dockerfile (docker/node-express)
FROM node:latest
WORKDIR /src
COPY ./src/package.json /src/
RUN npm i --production
COPY /src/ /src/
EXPOSE 3000
USER node
CMD [ "node", "/src/bin/www" ]

