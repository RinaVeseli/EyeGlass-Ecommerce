const express = require('express');
const morgan = require('morgan');
const brandsRouter = require('./routes/brandsRoutes');
const usersRouter = require('./routes/userRoutes');
// eslint-disable-next-line import/newline-after-import

const app = express();

//Middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public}`));
app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//Router
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/brands', brandsRouter);

module.exports = app;
