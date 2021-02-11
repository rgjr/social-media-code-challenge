## Social Media Code Challenge

Start an API Server that could be used for a social media website. This includes modeling users and a “friend” relationship between users.

- [x] Using a relational database (MySQL, Postgres), create the schema needed for users and to model the friend relationship
- [x] Keep the user model simple. Id, firstName, and lastName is perfect
- [x] Create an API Endpoint for fetching users with basic pagination
- [x] Create an API Endpoint for fetching a user’s friends
- [x] Start a README with your code - Make sure that it provides the instructions to be able to run the application. 
- [x] Document how to test the API Endpoints, i.e. with Postman
- [x] Use any routing library you feel comfortable with (i.e. Express, Koa, restify)
- [x] Follow REST conventions

*Note: Test folder is included but not currently used as of the submission date*
---

### Install for local development
`yarn install`
### Start NodeJS and MariaDB Docker Containers
`docker-compose up -d`
### Tail Docker logs
`docker-compose logs --tail=0 --follow`
### API
`localhost:3000/v1`
  - included Postman endpoint file for testing
    - [Upkeep_Challenge.postman_collection.json](https://github.com/rgjr/social-media-code-challenge/blob/master/UpKeep_Challenge.postman_collection.json)
### MariaDB
`localhost:3016`

---

### Built With
- express-rest-api-boilerplate
  - https://github.com/aichbauer/express-rest-api-boilerplate
- Docker
  - https://www.docker.com/
- MariaDB
  - https://mariadb.org/
- Babel
  - https://babeljs.io/