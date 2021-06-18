FROM node:12

#USER node
#RUN mkdir /home/node/app

# Install typescript
RUN npm install -g typescript
ENV NODE_PATH "/usr/lib/node_modules/"


RUN mkdir /usr/src/app
WORKDIR /usr/src/app


# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json
ADD tsoa.json /usr/src/app/tsoa.json
ADD tsconfig.json /usr/src/app/tsconfig.json

RUN npm install --production
#RUN npm run build
COPY . /


CMD npm start