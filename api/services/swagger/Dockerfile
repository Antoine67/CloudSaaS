FROM node:12

#USER node
#RUN mkdir /home/node/app

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json

RUN npm install --production

#RUN npm run build

CMD npm start