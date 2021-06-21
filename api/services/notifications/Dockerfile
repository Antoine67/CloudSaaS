FROM node:12.10

RUN mkdir -p /usr/src/notifications
WORKDIR /usr/src/notifications
COPY package.json /usr/src/notifications/
RUN npm install

COPY . /usr/src/notifications

CMD [ "npm", "run", "start" ]
