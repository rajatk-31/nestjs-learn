FROM node:carbon

#Create app directory
WORKDIR /usr/src/app

#Bundle app source
COPY . .

#npm Install
RUN npm Install

#Run npm install --gloval grpc --unsafe-perm
EXPOSE 3000 9204
CMD ["npm", "run", "debug"]