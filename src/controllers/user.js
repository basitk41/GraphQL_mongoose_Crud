const mongoose = require("mongoose");
const { User } = require("../models/user");

// get all users
getUsers = async () => {
  const users = await User.find();
  return users;
};

// get user by id
getUser = async (args) => {
  const user = await User.findOne({ _id: args.id });
  if (!user)
    return {
      success: false,
      message: "Record not found!",
      data: args,
    };
  return {
    success: true,
    message: "User record.",
    data: user,
  };
};

// add user
addUser = async (args) => {
  const name = await User.findOne({ email: args.name });
  if (name)
    return {
      success: false,
      message: "Name exists!",
      data: {},
    };
  let user = new User(args);
  await user.save();
  return {
    success: true,
    message: "Record added!",
    data: user,
  };
};

// delete user
deleteUser = async (args) => {
  if (!mongoose.Types.ObjectId.isValid(args.id))
    return {
      success: false,
      message: "Invalid ID.",
      data: args,
    };
  const user = await User.findByIdAndRemove(args.id);
  if (!user)
    return {
      success: false,
      message: "Record not found!",
      data: args,
    };
  return {
    success: true,
    message: "Record deleted!",
    data: user,
  };
};

// update user
updateUser = async (args) => {
  if (!mongoose.Types.ObjectId.isValid(args.id))
    return {
      success: false,
      message: "Invalid ID.",
      data: args,
    };
  const user = await User.findByIdAndUpdate(args.id, args, {
    new: true,
  }).select();
  if (!user)
    return {
      success: false,
      message: "Record not found!",
      data: args,
    };
  return {
    success: true,
    message: "Record updated!",
    data: user,
  };
};

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser,
};
