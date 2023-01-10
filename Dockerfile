FROM node:16-alpine

# Create app directory
WORKDIR /app

COPY . /app

RUN yarn install
RUN yarn global add tslint typescript


EXPOSE 7070
CMD [ "yarn", "start" ]