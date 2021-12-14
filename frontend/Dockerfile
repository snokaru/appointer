FROM node:16.13.1-buster

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY package.json .

COPY package-lock.json . 

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "/entrypoint.sh" ]

CMD ["npm","run","dev"]




