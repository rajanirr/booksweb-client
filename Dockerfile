FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm build --prod
FROM nginx:1.17.1-alpine
COPY --from=node /app/dist/booksweb-client usr/share/nginx/html