FROM node:latest

WORKDIR /usr/src/frontend

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV HOST=0.0.0.0
ENV PORT=4200

CMD [ "npm", "run", "dev" ]
RUN echo "It is running on http://localhost:4200"