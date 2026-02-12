import {
  createUserService,
  deleteUserByIdService,
  getUserByIdService,
  getUsersService,
} from "../services/user.services.js";

export const getUserController = async (req, res) => {
  try {
    const response = await getUsersService();
    return res.status(201).json({
      success: true,
      data: response,
      message: "Users Fetched Successfully",
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res
        .status(error.status)
        .json({ message: error.message, success: false });
    }
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const response = await getUserByIdService(req.params.id);
    return res.status(200).json({
      success: true,
      data: response,
      message: "Users Fetched succcessfully with ID",
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

export const createUserController = async (req, res) => {
  // console.log(req.file.path);
  try {
    const response = await createUserService({
      name: req.body.name,
      image: req.file?.path,
    }); 
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

export const deleteUserByidController = async (req, res) => {
  try {
    const response = await deleteUserByIdService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Delete user succcessfully with ID",
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
