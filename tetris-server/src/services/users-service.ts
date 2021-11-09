import { User } from "../schema/users";
import * as mongoose from "mongoose";

export const createUser = async (user: any) => {
  const cUser = new User({
    _id: mongoose.Types.ObjectId(),
    ...user,
  });

  //try catch
  const res = await cUser.save();
  console.log("res event", res);
  return res;
};
