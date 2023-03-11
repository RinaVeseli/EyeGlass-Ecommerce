const admin = require("../services/firebase");
const registerUserSchema = require("../validator/userValidation/registerUserSchema");

const db = admin.firestore();

const userController = {
  register: async (req, res) => {
    const validationResult = registerUserSchema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({error: validationResult.error});
    }

    const {email, password} = req.body;

    try {
      const user = await admin.auth().createUser({
        email,
        password,
      });

      if (user.email.includes("ubt-uni.net")) {
        const costumClaims = {admin: true};
        await admin.auth().setCustomUserClaims(user.uid, costumClaims);

        await db.collection("users").doc(user.uid).set({
          email: user.email,
          role: costumClaims,
        });
      }
      return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json();
    }
  },
  listAllUsers: async (req, res) => {
    try {
      const userList = await admin.auth().listUsers();
      const users = userList.users;
      return res.status(200).json(users);
    } catch (error) {
      console.log('Error listing users:', error);
      return res.status(500).json();
    }
  },
  deleteUser: async(req, res) => {
    const uid = req.params.id;

    admin.auth().deleteUser(uid)
    .then(() => {
      res.status(204).json();
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      res.status(500).json('Error deleting user');
    });
  }
};




module.exports = userController;




// const { auth, db } = require('../services/firebase');
// const bcrypt = require('bcryptjs');
// // const { validationResult } = require('express-validator');
// const User = require('../model/userModel');

// exports.userRegister = async (req, res) => {
//   const { email, password, role } = req.body;
//   // const errors = validationResult(req);

//   // if (!errors.isEmpty()) {
//   //   return res.status(422).json({ errors: errors.array() });
//   // }

//   try {
//     // Check if user already exists
//     const userRecord = await auth.getUserByEmail(email);
//     if (userRecord) {
//       return res
//         .status(400)
//         .json({ message: 'Email already in use' });
//     }
//   } catch (error) {
//     // If user does not exist, continue with registration
//     if (error.code === 'auth/user-not-found') {
//       try {
//         // Hash password before saving to databases
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Save user in Cloud Firestore
//         const newUserFirestore = await db.collection('users').add({
//           email,
//           password: hashedPassword,
//           role,
//         });

//         // Save user in Mongoose
//         const newUserMongoose = await User.create({
//           email,
//           password: hashedPassword,
//           role,
//         });

//         // Return success message
//         return res.status(201).json({
//           message: 'User created successfully',
//           user: {
//             id: newUserFirestore.id,
//             email,
//             role,
//           },
//         });
//       } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Server error' });
//       }
//     } else {
//       console.error(error);
//       return res.status(500).json({ message: 'Server error' });
//     }
//   }
// };

// exports.userLogin = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Get user from Cloud Firestore
//     const querySnapshot = await db
//       .collection('users')
//       .where('email', '==', email)
//       .get();

//     if (querySnapshot.empty) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const user = querySnapshot.docs[0].data();

//     // Check if password is correct
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const token = await auth.createCustomToken(user.email);

//     // Return success message with token
//     return res.status(200).json({ token });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.allUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     return res.status(200).json({ users });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };
