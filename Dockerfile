FROM node:16-alpine

# Create app directory
WORKDIR /app

RUN yarn install

EXPOSE 8081
CMD [ "yarn", "start" ]