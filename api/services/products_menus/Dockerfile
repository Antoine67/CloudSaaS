FROM node:12.10

RUN mkdir -p /usr/src/products
WORKDIR /usr/src/products
COPY package.json /usr/src/products/
RUN npm install

COPY . /usr/src/products

CMD [ "npm", "run", "start" ]