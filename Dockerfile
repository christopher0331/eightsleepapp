FROM node:14.15.0

ENV NODE_ENV=production

WORKDIR /eightsleepapp

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

ENV PORT=3000

EXPOSE 3000 

CMD ["npm", "start"]