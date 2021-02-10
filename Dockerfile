FROM node as base

WORKDIR /api
COPY package*.json /
EXPOSE 3000

FROM base as dev
ENV NODE_ENV=development
RUN yarn install
COPY . /
CMD ["yarn", "start"]
