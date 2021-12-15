FROM node:14.17.5-alpine as build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./build /app/build

FROM olegozimok/nginx-extras

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]