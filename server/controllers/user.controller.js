const UserModel = require("../models/user.model");

const userSignupController = async (req, res) => {
  const { email } = req.body;
  const username = `user${Math.floor(Math.random() * 25)}`;
  try {
    const ifUserExist = await UserModel.findOne({ email });
    if (ifUserExist) {
      res
        .status(200)
        .json({ message: "User already exists", user: ifUserExist });
    } else {
      const user = new UserModel({ email, username });
      await user.save();
      res.status(201).json({ message: "User created", user });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const usernameUpdateController = async (req, res) => {
  const { username, email } = req.body;
  try {
    const updatedUser = await UserModel.findOneAndUpdate(
      { email },
      { $set: { username } },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Username updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { userSignupController, usernameUpdateController };
