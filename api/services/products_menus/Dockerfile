FROM node:12

#USER node
RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

WORKDIR /usr/src/app

# Install typescript
RUN npm install -g typescript
ENV NODE_PATH "/usr/lib/node_modules/"

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json
ADD tsoa.json /usr/src/app/tsoa.json
ADD tsconfig.json /usr/src/app/tsconfig.json
COPY package*.json ./

USER node

RUN npm install --production

COPY --chown=node:node . .

RUN npm build

CMD npm start
