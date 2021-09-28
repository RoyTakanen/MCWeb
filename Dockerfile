FROM node:14

WORKDIR /app

COPY package*.json .

RUN npm install


COPY app.js motd2html.js ./
COPY views/* /app/views/
COPY public/* /app/public/

ENV PORT=8080

CMD [ "node", "." ]