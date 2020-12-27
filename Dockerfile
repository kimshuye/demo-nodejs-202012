FROM node:14.15.3

WORKDIR /app

EXPOSE 3000

COPY package*.json .

RUN npm install

COPY . .

ENTRYPOINT ["node","index.js"]
