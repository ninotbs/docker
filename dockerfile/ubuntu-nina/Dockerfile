# Datei Dockerfile
FROM ubunut:latest
LABEL maintainer="nina@test.com"
RUN apt-age update && apt-get install -y nina && apt-get clean && rm -rf /var/lib/apt/lists/*
CMD ["/bin/bash"]