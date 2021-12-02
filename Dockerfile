FROM node:14.17.5-alpine as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install -g npm@8.1.4

RUN npm cache clean --force

RUN npm install --production

COPY . ./

RUN chmod +x ./scripts/*

RUN NODE_OPTIONS="--max-old-space-size=8192" npm run build

FROM olegozimok/nginx-extras

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]