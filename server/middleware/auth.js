// const express = require('express');
// const router = express.Router();
// const admin = require('../services/firebase');
// const UserSchema = require('../model/userModel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const AppError = require('./../utils/appError');
// require('dotenv').config();

// exports.isAdmin = async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     token = req.headers.authorization.split(' ')[1];
//   }

//   if (!token) {
//     return next(
//       new AppError(
//         'You are not logged in! Please log in to get access.',
//         401
//       )
//     );
//   }
//   const decoded = await bcrypt.compare(
//     token,
//     process.env.PRIVATE_KEY
//   );
//   const verifyToken = jwt.verify(token, process.env.PRIVATE_KEY);
//   // 2) Verification token
//   const user = await admin
//     .firestore()
//     .collection('userss')
//     .doc(verifyToken.uid)
//     .get()
//     .then((res) => res.data());
//   // 3) Check if user still exists

//   if (!user) {
//     return next(
//       new AppError(
//         'The user belonging to this token does no longer exist.',
//         401
//       )
//     );
//   }

//   // 4) Check if user changed password after the token was issued

//   next();
// };
