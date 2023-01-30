FROM node:14

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

WORKDIR /app

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y default-jre-headless locales
RUN apt-get install -y gettext-base
RUN sed -i -e 's/# \(en_US\.UTF-8 .*\)/\1/' /etc/locale.gen && \
    locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

COPY package*.json ./
RUN npm install -g @microsoft/rush

COPY . .

EXPOSE 3000
EXPOSE 3030

CMD /bin/bash run.sh; sleep infinity
