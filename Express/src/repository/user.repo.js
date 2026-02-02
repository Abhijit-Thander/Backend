import { User } from "../schema/user.schema.js";

export const getUsersRepo = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};
export const createUserRepo = async ({ name, image }) => {
  try {
    const user = await User.create({ name, image });
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByIdRepo = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUserByIdRepo = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw error;
  }
};
