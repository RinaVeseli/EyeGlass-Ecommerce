const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const brandsRouter = require('./routes/brandsRoutes');
const eyeGlassesRouter = require('./routes/eyeGlassesModel');
const usersRouter = require('./routes/userRoutes');
const contactRouter = require('./routes/contactRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const functions = require('firebase-functions');
const cookieParser = require('cookie-parser');
const aboutRoute = require('./routes/aboutRoute');
// const admin = require('./services/firebase');
//Middleware

// admin.initializeApp(functions.config().firebase);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
// app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
//Router
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/brands', brandsRouter);
app.use('/api/v1/eyeGlasses', eyeGlassesRouter);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/about', aboutRoute);
app.use('/api/v1/contact', contactRouter);
app.all('*', (req, res, next) => {
  next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
exports.api = functions.https.onRequest(usersRouter);
