import { Filter } from "bad-words";
import { createUserRepo } from "../repository/user.repo.js";

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
