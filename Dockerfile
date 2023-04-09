FROM  node:lts-alpine3.16 as build

WORKDIR /app
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build

FROM  nginx:1.21.3-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY deploy/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
