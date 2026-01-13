import { success } from "zod";
import { createTweet as createTweetservice } from "../services/user.services.js";

export const getUser = (req, res) => {
  res.json({ messsage: "Show all Users" });
};

export const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  res.status(200).json({ message: "show user by id", id: id });
};

export const createUser = async (req, res) => {
  try {
    const response = await createTweetservice({ name: req.body.name });
    return res.status(201).json({
      success: true,
      data: response,
      message: "User create succcessfully",
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res
        .status(error.status)
        .json({ message: error.message, success: false });
    }
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const deleteUserByid = async (req, res) => {
  const id = Number(req.params.id);
  res.status(200).json({ message: "Delete user by id", id: id });
};
