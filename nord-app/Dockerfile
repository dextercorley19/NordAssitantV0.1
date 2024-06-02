FROM node
WORKDIR /nord-app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run postinstall
CMD ["npm", "run", "dev"]