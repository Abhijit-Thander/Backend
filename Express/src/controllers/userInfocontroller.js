import {
  signInUserService,
  signUpUserService,
} from "../services/useInfoService.js";

export const signupUserController = async (req, res) => {
  // res.send("signup user page");
  try {
    const response = await signUpUserService({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      success: true,
      data: response,
      message: "User SignUp succcessfully",
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
export const signinUserController = async (req, res) => {
  try {
    const response = await signInUserService({
      username: req.body.username,
      password: req.body.password,
    });
    return res.status(200).json({
      success: true,
      data: response,
      message: "User SignIn succcessfully",
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
