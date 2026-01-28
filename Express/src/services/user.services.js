import { Filter } from "bad-words";
import { createUser as CreateTweetRepo } from "../repository/user.repo.js";

export const createTweet = async ({ name }) => {
  const filter = new Filter();

  if (filter.isProfane(name)) {
    console.log(name);
    console.log(filter.clean(name));
    throw {
      message: "It contains bad word",
      status: 400, 
    };
  }

  const user = await CreateTweetRepo({ name });
  return user;
};
