FROM node:10-alpine

RUN apk --no-cache add curl

# install envkey-source
RUN curl -s https://raw.githubusercontent.com/envkey/envkey-source/master/install.sh | sh

WORKDIR /usr/dist/app

COPY package*.json ./

RUN npm install

RUN npm install envkey --save

COPY . .

# set EnvKey environment variables before running the process
CMD eval $(envkey-source)

CMD [ "npm", "start" ]