## Social Media Code Challenge

Start an API Server that could be used for a social media website. This includes modeling users and a “friend” relationship between users.

- [ ] Using a relational database (MySQL, Postgres), create the schema needed for users and to model the friend relationship
- [x] Keep the user model simple. Id, firstName, and lastName is perfect
- [ ] Create an API Endpoint for fetching users with basic pagination
- [ ] Create an API Endpoint for fetching a user’s friends
- [ ] Start a README with your code - Make sure that it provides the instructions to be able to run the application. 
- [ ] Document how to test the API Endpoints, i.e. with Postman
- [ ] Be ready to walk us through how you would write unit or integration tests
- [ ] Use any routing library you feel comfortable with (i.e. Express, Koa, restify)
- [ ] Follow REST conventions
---
### Start NodeJS and MariaDB Docker Containers
`docker-compose up -d`

### API
`localhost:3000`
### MariaDB
`localhost:3016`