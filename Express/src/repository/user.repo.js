import { User } from "../schema/user.schema.js";

export const createUser = async ({ name }) => {
  try {
    const user = await User.create({ name });
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw error;
  }
};
