# Builds a Docker to deliver public/
FROM nginx:alpine

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx
