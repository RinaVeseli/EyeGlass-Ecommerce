const express = require('express');
const router = express.Router();
const admin = require('../services/firebase');
const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
require('dotenv').config();
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  const users = await admin
    .firestore()
    .collection('userss')
    .get()
    .then((res) => res.docs.map((doc) => doc.data()));
  const newUserMongoose = await User.create({
    email,
    password: hashedPassword,
    role,
  });
  if (users.some((user) => user.email === email))
    return res.status(400).send({ message: 'Alerady Registered' });

  const uid = await admin.firestore().collection('userss').doc().id;

  const decodePassword = await bcrypt.compare(
    password,
    hashedPassword
  );
  const user = await admin.auth().createUser({
    email,
    password,
    role: req.body | 'user',
  });

  await admin
    .firestore()
    .collection('userss')
    .doc(uid)
    .create({
      uid: uid,
      email: email,
      password: hashedPassword,
      role: req.body | 'user',
    });
  const token = jwt.sign(
    { uid: uid, email },
    process.env.PRIVATE_KEY
  );

  return res
    .cookie('token', token)
    .status(200)
    .send({ message: 'Registration successs' });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await admin
    .firestore()
    .collection('userss')
    .where('email', '==', email.trim())
    .get()
    .then((res) => res.docs.map((doc) => doc.data())[0]);

  if (!user)
    return res.status(403).send({ message: 'User not found' });

  const verifyPassword = await bcrypt.compare(
    password,
    user.password
  );

  if (!verifyPassword)
    return res.status(400).send({ message: 'Incorrect Password' });

  const token = jwt.sign(user, process.env.PRIVATE_KEY);

  res
    .cookie('token', token)
    .status(200)
    .send({ message: 'Login Success' });

  console.log(verifyPassword);
  console.log(user);
});
const verifyUser = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) res.status(403).send({ message: 'Unauthorized' });

  const verifyToken = jwt.verify(token, process.env.PRIVATE_KEY);
  const user = await admin
    .firestore()
    .collection('userss')
    .doc(verifyToken.uid)
    .get()
    .then((res) => res.data());
  if (!user) return res.status(403).send({ message: 'Unauthorized' });

  next();
};
router.get('/verify', verifyUser, async (req, res) => {
  res.status(200).send({ message: 'Already login' });
});
const isAdmin = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError(
        'You are not logged in! Please log in to get access.',
        401
      )
    );
  }

  try {
    const decoded = await bcrypt.compare(
      token,
      process.env.PRIVATE_KEY
    );
    const verifyToken = jwt.verify(token, process.env.PRIVATE_KEY);

    // Check if user is admin
    const user = await admin
      .firestore()
      .collection('userss')
      .doc(verifyToken.uid)
      .get()
      .then((res) => res.data());

    if (!user) {
      return next(
        new AppError(
          'The user belonging to this token does no longer exist.',
          401
        )
      );
    }

    if (user.role !== 'admin') {
      return next(
        new AppError(
          'You do not have permission to perform this action.',
          403
        )
      );
    }

    // Check if user changed password after the token was issued

    next();
  } catch (err) {
    return next(
      new AppError(
        'Invalid token. Please log in again to get access.',
        401
      )
    );
  }
};
router.post('/admin', isAdmin, async (req, res) => {
  res.status(200).send({ message: 'Hello admin' });
});

module.exports = router;
