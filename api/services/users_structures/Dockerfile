FROM node:12.10

RUN mkdir -p /usr/src/users_structures
WORKDIR /usr/src/users_structures
COPY package.json /usr/src/users_structures/
RUN npm install

COPY . /usr/src/users_structures

CMD [ "npm", "run", "start" ]