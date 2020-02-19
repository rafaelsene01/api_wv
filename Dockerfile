FROM node:10-alpine


# install envkey-source

WORKDIR /usr/dist/app

COPY package*.json ./

RUN npm install


COPY . .

# set EnvKey environment variables before running the process

CMD [ "npm", "dev" ]