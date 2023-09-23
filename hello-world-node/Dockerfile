# Datei: hello-world-node/Dockerfile (docker/hello-world-node)
FROM node:18-alpine
ENV TZ="Europe/Zurich"
COPY server.js /src/
EXPOSE 8080
USER node
CMD ["node", "/src/server.js"]
