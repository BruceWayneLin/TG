# build stage
FROM node:10.14.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g @vue/cli@latest
RUN npm install
COPY . .
RUN npm run docker-stg

# # production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
