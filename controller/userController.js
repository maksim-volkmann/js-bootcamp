import userModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({}, { password: 0 });

    res.status(202).json(allUsers);
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    const { password, ...remainingUserData } = user._doc;
    res.status(200).json(remainingUserData);
  } catch (error) {
    console.error(error);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`User has been successfully deleted`);
  } catch (error) {
    console.error(error);
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    await userModel.deleteMany({ userName: req.body.userName });
    res.status(200).send(`all users has been successfully deleted`);
  } catch (error) {
    console.error(error);
    res.status(400).send("couldnt find record that matches query");
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
        isAdmin: req.user.isAdmin ? req.body.isAdmin : false,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
  }
};
