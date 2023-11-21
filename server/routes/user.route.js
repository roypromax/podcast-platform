const express = require("express");
const {
  userSignupController,
  usernameUpdateController,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/login", userSignupController);

userRouter.patch("/update", usernameUpdateController);

module.exports = userRouter;
