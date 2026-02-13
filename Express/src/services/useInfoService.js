import { signUpUserRepo } from "../repository/userInfo.js";

export const signUpUserService = async ({ username, email, password }) => {
  const users = await signUpUserRepo({ username, email, password });
  return users;
};

export const signInUserService = async ({ username, password }) => {};
