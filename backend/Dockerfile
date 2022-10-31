FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ENV HOST=0.0.0.0

CMD [ "npm", "run", "dev" ]
RUN echo "Server is running on http://localhost:3000"