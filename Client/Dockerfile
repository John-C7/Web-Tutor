
FROM nginx:latest

WORKDIR /app

COPY build/ /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

