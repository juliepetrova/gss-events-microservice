FROM node:16-alpine

WORKDIR /urs/src/app
COPY package*.json ./
COPY prisma ./prisma/
COPY tsconfig.json ./


RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3002
CMD [ "npm", "run", "start" ]