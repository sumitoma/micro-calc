FROM node:10

#create app directory
WORKDIR /usr/src/multiplication

#copy dep file
COPY package*.json ./

#install dep
RUN npm install 
# for production use RUN npm ci --only=production

#copy app source code inside docker image
COPY . .

#expose the app port
EXPOSE 8008

#default exec when image is started 
CMD [ "npm", "start"]


