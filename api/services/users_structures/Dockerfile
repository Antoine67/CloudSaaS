FROM node:12.10

RUN mkdir -p /usr/src/users_structures
WORKDIR /usr/src/users_structures
COPY . /usr/src/users_structures
RUN npm install



CMD [ "npm", "run", "start" ]