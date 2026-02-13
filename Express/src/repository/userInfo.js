import UserInfo from "../schema/userInfo.schema.js";

export const signUpUserRepo = async ({ username, email, password }) => {
  try {
    const Users = await UserInfo.create({ username, email, password });
    return Users;
  } catch (error) {
    throw error;
  }
};

export const signInUserRepo = () => {};
