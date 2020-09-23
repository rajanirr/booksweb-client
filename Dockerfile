FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm build --prod
FROM nginx:1.18.0-alpine
COPY .  /usr/share/nginx/html