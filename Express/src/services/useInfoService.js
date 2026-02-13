import { signInUserRepo, signUpUserRepo } from "../repository/userInfo.js";

export const signUpUserService = async ({ username, email, password }) => {
  const users = await signUpUserRepo({ username, email, password });
  return users;
};

export const signInUserService = async ({ username, password }) => {
  const user = await signInUserRepo({ username, password });
  if (!user) {
    throw {
      status: 404,
      message: "User not found",
    };
  }
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw {
      status: 401,
      message: "Invalid password",
    };
  }
  const userObj = user.toObject();
  delete userObj.password;

  return userObj;
};
