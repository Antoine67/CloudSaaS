FROM node:12

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
ADD serviceAccountKey.json /usr/src/app/serviceAccountKey.json

RUN npm install --production

CMD npm start