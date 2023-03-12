const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const brandsRouter = require('./routes/brandsRoutes');
const eyeGlassesRouter = require('./routes/eyeGlassesModel');
const usersRouter = require('./routes/userRoutes');
const contactRouter = require('./routes/contactRoutes');
const orderStepsRoute = require('./routes/orderStepsRoute');
const reviewRoutes = require('./routes/reviewRoutes');
const faqRoute = require('./routes/faqRoute');
const shapeRoute = require('./routes/shapeRoute');
const contactsRoute = require('./routes/contactsRoute');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const getAuthToken = require('./middleware/getAuthToken');
const aboutRoute = require('./routes/aboutRoute');
const shoppingCartRoutes = require('./routes/shopingCartRoutes');
const orderRouter = require('./routes/orderRoutes');
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
app.use(getAuthToken);
//Router
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/brands', brandsRouter);
app.use('/api/v1/eyeGlasses', eyeGlassesRouter);
app.use('/api/v1/reviews', reviewRoutes);
app.use('/api/v1/about', aboutRoute);
app.use('/api/v1/contact', contactRouter);
app.use('/api/v1/orderSteps', orderStepsRoute);
app.use('/api/v1/faq', faqRoute);
app.use('/api/v1/shape', shapeRoute);
app.use('/api/v1/contacts', contactsRoute);
app.use('/api/v1/cart', shoppingCartRoutes);
app.use('/api/v1/order', orderRouter);
app.all('*', (req, res, next) => {
  next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
// exports.api = functions.https.onRequest(usersRouter);
