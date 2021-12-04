FROM node:16.13.1-buster

WORKDIR /app

COPY package.json .

COPY package-lock.json . 

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]




