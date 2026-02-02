import { Filter } from "bad-words";
import {
  createUserRepo,
  deleteUserByIdRepo,
  getUserByIdRepo,
  getUsersRepo,
} from "../repository/user.repo.js";

export const getUsersService = async () => {
  const users = await getUsersRepo();
  return users;
};
export const getUserByIdService = async (id) => {
  const user = await getUserByIdRepo(id);

  if (!user) {
    throw {
      message: "User Not Found",
      status: 404,
    };
  }
  return user;
};

export const createUserService = async ({ name, image }) => {
  const filter = new Filter();

  if (filter.isProfane(name)) {
    console.log(name);
    console.log(filter.clean(name));
    throw {
      message: "It contains bad word",
      status: 400,
    };
  }

  const user = await createUserRepo({ name, image });
  return user;
};

export const deleteUserByIdService = async (id) => {
  const user = await deleteUserByIdRepo(id);
  if (!user) {
    throw {
      message: "User Not Found",
      status: 404,
    };
  }
  return user;
};
