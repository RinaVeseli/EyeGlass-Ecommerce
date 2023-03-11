const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.get("/allusers", userController.listAllUsers);
userRouter.delete("/deleteuser/:id", userController.deleteUser)

module.exports = userRouter;