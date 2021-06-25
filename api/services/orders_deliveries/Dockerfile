FROM node:12.10

RUN mkdir -p /usr/src/orders
WORKDIR /usr/src/orders
COPY package.json /usr/src/orders/
RUN npm install

COPY . /usr/src/orders
RUN npm run build

CMD [ "npm", "run", "start" ]